
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCart from './CategoryCart';
import { Row } from 'react-bootstrap';

const Shopbycategory = () => {

    const [data, setData] = useState([])
   
    const handleTabClick = (data) => {
        const url = `https://car-craze-server.vercel.app/search?category=${data}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    };

    useEffect(() => {
        handleTabClick('Truck')
    }, ['Truck'])



    const tabs = [
        { title: 'Truck', data: 'Truck' },
        { title: 'Sports Car', data: 'Sports Car' },
        { title: 'Regular Car', data: 'Regular Car' }
    ];

    return (
        <div className='container'>
            <h1 className='text-center my-5'>Shop by category</h1>
            <Tabs>
                <TabList>
                    {
                        tabs.map((tab, idx) => <Tab key={idx} onClick={() => handleTabClick(tab.data)}>{tab.title}</Tab>)
                    }
                </TabList>

                {tabs.map(idx => (
                    <TabPanel key={idx}>
                        <Row xs={1} md={3} className="g-4">
                            {
                                data.map(cars => <CategoryCart key={cars._id} cars={cars}></CategoryCart>)
                            }
                        </Row>
                    </TabPanel>
                ))}

            </Tabs>
        </div>
    );
};

export default Shopbycategory;