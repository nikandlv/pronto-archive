import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Explore from '@material-ui/icons/ExploreOutlined';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import withDynamic from '../../Data/withDynamic';
import { setSearch } from '../../Data/Actions/ApplicationActions';
const styles = {
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '100rem'
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
};

function Searchbar(props) {
    const [filterMode,setFilterMode] = React.useState(false)
    const { classes } = props;
    let query = "";
    const locale = props.ApplicationReducer.locale || {};
    return (
        <Paper className={classes.root+" paper"} elevation={1}>
            <IconButton className={classes.iconButton} aria-label="Menu">
                <Explore />
            </IconButton>
            <InputBase className={classes.input} defaultValue={query} onKeyPress={(event)=> {
                if(event.key === 'Enter'){
                    if(query !== "") {
                        props.setSearch(query)
                    }
                }
            }} onChange={(event)=> {
                query = event.target.value;
            }} placeholder={locale.search_placeholder} />
            <IconButton className={classes.iconButton} aria-label="Search"  onClick={()=> {
                if(query !== "") {
                    props.setSearch(query)
                }
            }}>
                <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} />
            <IconButton color="primary" className={classes.iconButton} aria-label="Filter mode"  onClick={()=> {
                setFilterMode(!filterMode)
            }}>
                <FilterListIcon />
            </IconButton>
        </Paper>
    );
}

Searchbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withDynamic(withStyles(styles)(Searchbar))
                .injectReducer('ApplicationReducer')
                .injectAction('setSearch',setSearch)
                .build();