import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MenuCardPage } from './pages/MenuCardPages.jsx';
import { PicturesPage } from './pages/PicturesPage';
import {NumbersPage} from "./pages/NumbersPage.jsx";
import {CarsPage} from "./pages/CarsPage.jsx";
import {PersonsPage} from "./pages/PersonsPage.jsx";
import {EventsPage} from "./pages/EventsPage.jsx";
import {StatePage} from "./pages/StatePage.jsx";
import {FavoriteNumberPage} from "./pages/FavoriteNumberPage.jsx";
import {NUMBER_DATA} from "./data/data.js";
import {InputPage} from "./pages/InputPage.jsx";

function App() {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Menu</Tab>
                    <Tab>Pictures</Tab>
                    <Tab>Numbers</Tab>
                    <Tab>Cars</Tab>
                    <Tab>Persons</Tab>
                    <Tab>Events page</Tab>
                    <Tab>State</Tab>
                    <Tab>Fav Numbers</Tab>
                    <Tab>Input page</Tab>
                </TabList>

                <TabPanel>
                    <MenuCardPage />
                </TabPanel>

                <TabPanel>
                    <PicturesPage />
                </TabPanel>

                <TabPanel>
                    <NumbersPage />
                </TabPanel>

                <TabPanel>
                    <CarsPage/>
                </TabPanel>

                <TabPanel>
                    <PersonsPage/>
                </TabPanel>

                <TabPanel>
                    <EventsPage/>
                </TabPanel>

                <TabPanel>
                    <StatePage/>
                </TabPanel>

                <TabPanel>
                    <FavoriteNumberPage numbers={NUMBER_DATA} />
                </TabPanel>

                <TabPanel>
                    <InputPage/>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default App;
