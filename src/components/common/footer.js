import { Layout } from 'antd'
import { GLOBAL } from 'constants/app'

const Footer = () => (
  <Layout.Footer style={{ textAlign: 'center' }}>
    {GLOBAL.COMPANY_NAME_SHORT} ©2021 Created by {GLOBAL.COMPANY_NAME_LONG} LtD
  </Layout.Footer>
)

export default Footer
