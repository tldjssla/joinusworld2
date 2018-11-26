import React, { Component } from 'react';

class DailyStats extends Component {

    render() {
        return (
            <div id="tableSorterTransparent"  >
                <span>
                    <label className="blankHyperlink activeSortTransparentButton">Last Week</label>
                </span>
                <span>
                    <label className="blankHyperlink">Last Month</label>
                </span>
                <span>
                    <label className="blankHyperlink">Last Year</label>
                </span>
                <span>
                    <label className="blankHyperlink">All</label>
                </span>
                <div className="table-responsive">
                    <table className='table text-center  mgt-15'>
                        <thead className='table-info'>
                        <tr>
                            <td>Visit</td>
                            <td>Login</td>
                            <td>View</td>
                            <td>Question</td>
                            <td>Answer</td>
                            <td>Post</td>
                            <td>Reply</td>
                            <td>Comment</td>
                            <td>Spam</td>
                            <td>Vote</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1200</td>
                            <td>350</td>
                            <td>2500</td>
                            <td>98</td>
                            <td>120</td>
                            <td>23</td>
                            <td>150</td>
                            <td>200</td>
                            <td>5</td>
                            <td>80</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default DailyStats;