import { useEffect, useState } from 'react';
import './App.css';
import { Layout } from 'antd';
import PageMenu from './layout/menu';
import PageContent from './layout/content';
import { useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';
import http from './utils/http';
const { Header, Content, Sider } = Layout;


function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [search, setSearch] = useSearchParams()
  const router = { ...location, push: navigate, setSearch, search }
  console.log(router, 'router')

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token,'token')
    if(!token) {
      navigate('/login')
    }
  },[])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <PageMenu router={router} />
      </Sider>
      <Layout className="app-content">
        <Content  >
          <PageContent router={router} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
