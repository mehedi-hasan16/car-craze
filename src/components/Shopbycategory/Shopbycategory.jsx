
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCart from './CategoryCart';
import { Row } from 'react-bootstrap';

const Shopbycategory = () => {

    const [data, setData] = useState([])
    // const handleCategorySearch = categoryName => {

    //     const url = `http://localhost:5000/search?category=${categoryName}`;
    // }
    const handleTabClick = (data) => {
        console.log(data);
        const url = `http://localhost:5000/search?category=${data}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
      };
      const tabs = [
        { title: 'Tab 1', data: 'RC Cars' },
        { title: 'Tab 2', data: 'Data for Tab 2' },
        { title: 'Tab 3', data: 'Data for Tab 3' }
      ];

      console.log(data);

    return (
        <div>
            <Tabs>
                <TabList>
                    {/* <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab> */}
                    {
                        tabs.map((tab, idx)=><Tab key={idx} onClick={() => handleTabClick(tab.data)}>{tab.title}</Tab>)
                    }
                </TabList>

                <TabPanel>
                <Row xs={1} md={2} className="g-4">
                    {
                        data.map(cars=><CategoryCart key={cars._id} cars={cars}></CategoryCart>)
                    }
                </Row>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shopbycategory;