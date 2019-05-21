// pages/home.js
import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
    <div>
        <h1>{ props.title }</h1>
        <Link to="/list">跳转列表页杜景霏</Link>
    </div>
)

/**
 * 通过connect将redux中的数据传递进入组件
 */
function mapStateToProps(state) {
    return { ...state.home };
}

export default connect(mapStateToProps)(Home)
