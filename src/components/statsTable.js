import React, { Component } from 'react';

class statsTable extends Component {
    static defaultProps = {
        info: {
            solved: 'V',
            votes: '0',
            title: '0',
            author: '0',
            language: '0',
            lastModified:'1hours ago',
            view : '0',
            status:'public'
        }
    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {
            id,solved,votes,title,author,language,lastModified,view,status
        } = this.props.info;
        return (
            <tr>
                <td>
                    <input
                        type="checkbox"
                        name="check"
                    />
                </td>
                <td>{solved}</td>
                <td>{votes}</td>
                <td>{title}</td>
                <td>{author}</td>
                <td>{language}</td>
                <td>{lastModified}</td>
                <td>{view}</td>
                <td>{status}</td>
            </tr>
        );
    }
}

export default statsTable;