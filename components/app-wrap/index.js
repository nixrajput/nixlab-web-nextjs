import Navbar from "../navbar";

const AppWrap = (Component, idName, classNames) => {
    const HOC = () => {
        return (
            <div id={idName} className={`app__container`}>

                <Navbar />

                <div className={`app__wrapper app__flex ${classNames}`}>
                    <Component />
                </div>

            </div>
        );
    };
    return HOC;
}

export default AppWrap;