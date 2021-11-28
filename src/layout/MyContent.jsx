import { Layout } from 'antd';
const {Content} = Layout;
 
export const MyContent = (props)=>{
    return (
        <Content {...props}
className="site-layout-background"
style={{
  margin: '24px 16px',
  padding: 24,
  minHeight: 280,
}}
>
</Content>
    )
}