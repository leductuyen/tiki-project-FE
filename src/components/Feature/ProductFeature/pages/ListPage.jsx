import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import productApi from '../../../../api/productsApi';
import FiltersProduct from '../components/FiltersProduct';
import ListProduct from '../components/ListProduct';
import SkeletonProduct from '../components/SkeletonProduct';
import SortProduct from '../components/SortProduct';
import Styles from './ListPage.module.scss';
import { makeStyles } from '@material-ui/core';
ListPage.propTypes = {};
const useStyles = makeStyles((theme) => ({
    pagination: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
    },
}));
function ListPage(props) {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [listProduct, setListProduct] = useState([]);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 4,
        total: 5,
    });
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 18,
        _sort: 'salePrice:ASC',
    });
    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(filters);
                setListProduct(data);
                setPagination(pagination);
                console.log({ data });
            } catch (error) {
                console.log('Field', error);
            }
        })();
        setLoading(false);
    }, [filters]);
    const handlePaginationChange = (e, newPagination) => {
        setFilters((prevFilterts) => ({
            ...prevFilterts,
            _page: newPagination,
        }));
    };
    const handleSortChange = (newSort) => {
        setFilters((prevFilterts) => ({
            ...prevFilterts,
            _sort: newSort,
        }));
    };
    const handleFiltersChange = (newFilters) => {
        setFilters((prevFilterts) => ({
            ...prevFilterts,
            ...newFilters,
        }));
    };
    return (
        <div className={Styles.Container}>
            <div className={Styles.ContentWrap}>
                <div className={Styles.Sidebar}>
                    <FiltersProduct filters={filters} onChange={handleFiltersChange} />
                </div>
                <div className={Styles.ListPage}>
                    <SortProduct Sort={filters._sort} onChange={handleSortChange} />
                    {loading ? <SkeletonProduct /> : <ListProduct data={listProduct} />}
                    <Pagination
                        className={classes.pagination}
                        onChange={handlePaginationChange}
                        page={pagination.page}
                        count={Math.ceil(pagination.total / pagination.limit)}
                    />
                </div>
            </div>
        </div>
    );
}

export default ListPage;
