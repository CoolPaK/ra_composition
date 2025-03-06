import GetList from "./GetList";
import "./YandexPage.css";
import { dataTitle, newsList, rates, temes, titles, list } from './data';
import Search from "./Search";
import Banner from "./Banner";
import ContentBox from "./ContentBox";
import Weather from "./Weather";

export default function YandexPage() {
    return(
        <>        
            <GetList items={dataTitle} listClass="list-row" />
            <GetList items={newsList} listClass="list-column" />
            <GetList items={rates} listClass="list-row" />
            <GetList items={temes} listClass="list-row" />
            <Search />
            <Banner />
            <div className="content-boxes">
                <div>
                    <ContentBox props={titles[0]}>
                        <Weather />
                    </ContentBox>
                    <ContentBox props={titles[1]}>
                        <GetList items={list} listClass="list-column" />
                    </ContentBox>
                </div>
                <div>
                    <ContentBox props={titles[2]}>
                        <GetList items={list} listClass="list-column" />
                    </ContentBox>
                    <ContentBox props={titles[3]}>
                        <GetList items={list} listClass="list-column" />
                    </ContentBox>
                </div>
                <div>
                    <ContentBox props={titles[4]}>
                        <GetList items={list} listClass="list-column" />
                    </ContentBox>
                </div>
            </div>
        </>
    )
}