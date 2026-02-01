//? Planes
import Planes from './components/Planes';
import planes from './json/planes.json';



export default function App() {
    return (
        <div>
            <Planes
                key={planes[0].id}
                urlMain={planes[0].url.main}
                urlPromotional={planes[0].url.promotional}
                urlActual={planes[0].url.actual}
                nameBrief={planes[0].name.brief}
                nameFull={planes[0].name.full}
                nickname={planes[0].name.nickname}
                year={planes[0].info.year}
                country={planes[0].info.country}
                type={planes[0].info.type}
                price={planes[0].info.price}
                description={planes[0].info.description} />
            <Planes
                key={planes[1].id}
                urlMain={planes[1].url.main}
                urlPromotional={planes[1].url.promotional}
                urlActual={planes[1].url.actual}
                nameBrief={planes[1].name.brief}
                nameFull={planes[1].name.full}
                nickname={planes[1].name.nickname}
                year={planes[1].info.year}
                country={planes[1].info.country}
                type={planes[1].info.type}
                price={planes[1].info.price}
                description={planes[1].info.description} />
            <Planes
                key={planes[2].id}
                urlMain={planes[2].url.main}
                urlPromotional={planes[2].url.promotional}
                urlActual={planes[2].url.actual}
                nameBrief={planes[2].name.brief}
                nameFull={planes[2].name.full}
                nickname={planes[2].name.nickname}
                year={planes[2].info.year}
                country={planes[2].info.country}
                type={planes[2].info.type}
                price={planes[2].info.price}
                description={planes[2].info.description} />
        </div>

    );
};

