import React, { Component } from 'react';
import StatsTable from './statsTable';

class TableList extends Component {
    static defaultProps = {
        data: []
    }


    render() {
        const { data } = this.props;
        const list = data.map(
            info => (<StatsTable key={info.id} info={info}/>)
        );

        return (
            <table className='table table-hover text-center '>
                <thead className='table-info  '>
                    <tr>
                    <td>
                        <input
                            type="checkbox"
                            name="check"
                        />
                    </td>
                    <td>solved</td>
                    <td>votes</td>
                    <td>title</td>
                    <td>author</td>
                    <td>language</td>
                    <td>lastModified</td>
                    <td>view</td>
                    <td>status</td>
                </tr>
                </thead>
                <tbody className='table-bordered'>
                {list}
                </tbody>
            </table>
        );
    }
}

export default TableList;