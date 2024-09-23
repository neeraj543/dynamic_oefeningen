import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MenuCardPage } from './pages/MenuCardPages.jsx';  // Adjust the path if necessary
import { PicturesPage } from './pages/PicturesPage';  // Adjust the path if necessary

function App() {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Menu</Tab>
                    <Tab>Pictures</Tab>
                </TabList>

                <TabPanel>
                    <MenuCardPage />
                </TabPanel>

                <TabPanel>
                    <PicturesPage />
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default App;
