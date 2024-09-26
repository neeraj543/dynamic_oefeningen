import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MenuCardPage } from './pages/MenuCardPages.jsx';
import { PicturesPage } from './pages/PicturesPage';
import {NumbersPage} from "./pages/NumbersPage.jsx";
import {NumberFunctionPages} from "./pages/NumberFunctionPages.jsx";

function App() {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Menu</Tab>
                    <Tab>Pictures</Tab>
                    <Tab>Numbersss</Tab>
                </TabList>

                <TabPanel>
                    <MenuCardPage />
                </TabPanel>

                <TabPanel>
                    <PicturesPage />
                </TabPanel>

                <TabPanel>
                    <NumbersPage />
                    <NumberFunctionPages/>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default App;
