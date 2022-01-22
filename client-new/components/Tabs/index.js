import Tabs, {TabPane} from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import 'rc-tabs/assets/index.css';

const TabComponent = props => (
  <Tabs
    defaultActiveKey={props.activeItem}
    onChange={props.callback}
    renderTabBar={() => <ScrollableInkTabBar />}
    renderTabContent={() => <TabContent animated={props.animation} />}
  >
    {props.items.map((item, index) => (
      <TabPane tab={item.title} key={index}>
        {item.description}
      </TabPane>
    ))}
  </Tabs>
);

export default TabComponent;
