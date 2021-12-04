import { Layout } from 'antd'

const { Footer } = Layout

interface Props { }

const MainFooter = (props: Props) => {
  const { } = props

  return (
    <Footer style={{ textAlign: 'center' }}>
      <a href="https://jormanespinoza.com" target="_blank">
        Jorman Espinoza
      </a> ©2021 <a href="https://github.com/jormanespinoza/react-practice-one" target="_blank">React Practice One</a>
    </Footer>
  )
}

export default MainFooter