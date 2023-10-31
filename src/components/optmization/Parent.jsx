import React ,{ Suspense, useState } from "react";

const FirstChild = React.lazy(() => import('./FirstChild'))
function Parent() {
    const [count, setCount] = useState(0);
    return(
        <>
        <Suspense fallback={<p>This is loading</p>}>
            <FirstChild counter={count}></FirstChild>
        </Suspense>
            <button onClick={() => setCount(() =>count + 1)}>Count</button>

            <img loading="lazy" src="https://wallup.net/wp-content/uploads/2016/01/262458-nature-landscape-lake-forest-mountain-clouds-Germany-island-trees-summer-green-water.jpg"/>
            <img loading="lazy" src="https://wallup.net/wp-content/uploads/2016/01/262458-nature-landscape-lake-forest-mountain-clouds-Germany-island-trees-summer-green-water.jpg"/>
            <img loading="lazy" src="https://wallup.net/wp-content/uploads/2016/01/262458-nature-landscape-lake-forest-mountain-clouds-Germany-island-trees-summer-green-water.jpg"/>

            <img style={{height: '700px'}} loading="lazy" src="./public/vite.svg"/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <img style={{height: '700px'}} loading="lazy" src="./public/ss1.png"/>
            <img style={{height: '700px'}} loading="lazy" src="./public/ss2.png"/>
            <img  style={{height: '700px'}} loading="lazy" src="./public/ss3.png"/>


        </>
    )
}

export default Parent;