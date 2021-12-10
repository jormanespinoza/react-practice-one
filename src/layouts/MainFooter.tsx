import { Layout } from 'antd'

const { Footer } = Layout

const MainFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      <a href="https://jormanespinoza.com" target="_blank" rel="noreferrer">
        Jorman Espinoza
      </a>{' '}
      ©2021{' '}
      <a
        href="https://github.com/jormanespinoza/react-practice-one"
        target="_blank"
        rel="noreferrer"
      >
        React Practice One
      </a>
    </Footer>
  )
}

export default MainFooter
