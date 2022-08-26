import Navbar from "../navbar";

const AppWrap = (Component, idName) => {
    const HOC = () => {
        return (
            <div id={idName} className={`app__container`}>

                <Navbar />

                <div className="app__wrapper app__flex">
                    <Component />
                </div>

                {/* <NavigationDots /> */}

            </div>
        );
    };
    return HOC;
}

export default AppWrap;