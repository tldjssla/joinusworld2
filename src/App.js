import React, { Component } from 'react';
import TableList from './components/tableList';
import './App.css';
import Search from "./components/search";
import DailyStats from "./components/dailyStats";
import ReactDOM from 'react-dom';
class App extends Component {
    id = 2
    state = {
        information: [
            {
                solved: 'V',
                votes: '12',
                title: 'Hello World!',
                author: 'sanshipan',
                language: 'Chinese',
                lastModified:'1hours ago',
                view : '5',
                status:'public'
            },
            {
                solved: ' ',
                votes: '23',
                title: 'Ballon d\'or is mine',
                author: 'christiano',
                language: 'Espanyol',
                lastModified:'15 hours ago',
                view : '200',
                status:'private'
            },
            {
                solved: '',
                votes: '120',
                title: 'vim is the best editor',
                author: 'cat',
                language: 'English',
                lastModified:'yesterday',
                view : '150',
                status:'public'
            },
            {
                solved: '',
                votes: '0',
                title: '조인어스월드 너무좋아요',
                author: 'moon',
                language: 'Korean',
                lastModified:'yesterday',
                view : '100',
                status:'public'
            },
            {
                solved: '',
                votes: '0',
                title: 'ruby',
                author: 'sanshipan',
                language: 'Chinese',
                lastModified:'2018-09-13 17:04:51',
                view : '100',
                status:'public'
            },
            {
                solved: 'V',
                votes: '3',
                title: '안녕하세요 감사합니다.',
                author: 'moon',
                language: 'Korean',
                lastModified:'2018-09-12 17:04:51',
                view : '2221',
                status:'private'
            },
            {
                solved: '',
                votes: '13',
                title: 'Hola Corea es muy buena. Gracias',
                author: 'Saul Nigues',
                language: 'Spanish',
                lastModified:'2018-09-11 14:04:51',
                view : '50',
                status:'public'
            },
            {
                solved: 'V',
                votes: '31',
                title: 'HIHIHIHIHIHIHIHIHI.',
                author: 'moon',
                language: 'Korean',
                lastModified:'2018-09-12 17:04:51',
                view : '13',
                status:'private'
            },
            {
                solved: 'V',
                votes: '64',
                title: 'Welcome to Join us world.',
                author: 'UK KING',
                language: 'English',
                lastModified:'2018-05-13 14:21:51',
                view : '1',
                status:'private'
            },
            {
                solved: 'V',
                votes: '3',
                title: 'Hi, I love Korea.',
                author: 'aoa',
                language: 'Spanish',
                lastModified:'2018-09-12 17:04:51',
                view : '252',
                status:'private'
            },


        ]
    }
    tabActive(e){
       alert("active Label");
    }
    render() {
        return (

            <div className='container'>
                <DailyStats />
                {/*search*/}
                <Search />
                {/*table*/}
                <div className="row centerContent">
                    <div className='subTab'>
                        <div id="tableSorterTransparent" >
                            <span>
                                <label className="writeList blankHyperlink activeSortTransparentButton" onClick={this.tabActive}>Question</label>
                            </span>
                            <span>
                                <label className="writeList blankHyperlink" onClick={this.tabActive}>Answer</label>
                            </span>
                            <span>
                                <label className="writeList blankHyperlink" onClick={this.tabActive}>Comment Q</label>
                            </span>
                            <span>
                                <label className="writeList blankHyperlink" onClick={this.tabActive}>Comment A</label>
                            </span>

                        </div>
                    </div>
                    <div className="table-responsive">
                        <TableList data={this.state.information}/>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;