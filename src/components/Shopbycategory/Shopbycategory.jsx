
import { useEffect, useState } from 'react';
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

    useEffect(() => {
        handleTabClick('Truck')
    }, ['Truck'])



    const tabs = [
        { title: 'Truck', data: 'Truck' },
        { title: 'Sports Car', data: 'Sports Car' },
        { title: 'Regular Car', data: 'Regular Car' }
    ];

    console.log(data);

    return (
        <div className='container my-4'>
            <h2 className='text-center my-4'>Shop by category</h2>
            <Tabs>
                <TabList>
                    {/* <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab> */}
                    {
                        tabs.map((tab, idx) => <Tab key={idx} onClick={() => handleTabClick(tab.data)}>{tab.title}</Tab>)
                    }
                </TabList>

                {/* <TabPanel>
                <Row xs={1} md={3} className="g-4">
                    {
                        data.map(cars=><CategoryCart key={cars._id} cars={cars}></CategoryCart>)
                    }
                </Row>
                </TabPanel> */}
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