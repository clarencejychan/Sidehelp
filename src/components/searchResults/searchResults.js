import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Item from './item/item';
import getSearchItems from '../../actions/searchItemsAction';

// Container Component
class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // Here I know that someone may be trying to send link to somebody else.
    if (this.props.items && !this.props.items.length && this.props.location.search) {
      let searchText = queryString.parse(this.props.location.search);
      if ('item-name' in searchText) {
        // Have to use key notation cause of hyphen, dispatch items
        this.props.getSearchItems(searchText['item-name']);
      }
    }
  }

  render() {
    return (
      <div className='items-wrapper'>
        { this.props.items.map((item, index) => (
          console.log(index),
          console.log(item.itemName),
          <Item itemName={item.itemName} key={index} />
        ))}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getSearchItems: getSearchItems
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    // Gets the list of fetched items
    items: state.items.items
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);