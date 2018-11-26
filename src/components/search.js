import React, { Component } from 'react';

class Search extends Component {
    categoryHandler(){
        alert('category Btn')
    }
    searchHandler(){
        alert('search something (submit)')
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-6 form-inline mgt-15">
                        {/* what does category btn means? */}
                        <button type="button" className="btn btn-info" onClick={this.categoryHandler}>Category</button>
                        <label className="sr-only">Keyword</label>
                        <input type="text" className="cmn-text form-control" placeholder="Keyword"/>

                        <label className="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox1" value="option1"/> Author
                        </label>

                </div>
                <div className="col-md-6 form-inline mgt-15">
                    <div className="form-group">
                        <label className="sr-only">Keyword</label>
                        <input type="text" className="form-control" placeholder="Keyword"/>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-info" onClick={this.searchHandler}>search</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;