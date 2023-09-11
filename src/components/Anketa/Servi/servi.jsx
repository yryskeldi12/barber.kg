import React, { useState } from "react";
import './servi.scss'


const Servi = () => {
    const [showServi, setShowServi] = useState(false);

    const handleShowAllServis = () => {
        setShowServi(true);
    };

    return (
        <div id="servi">
            <div className="container">
                <h1>( Услуги мастера )</h1>
                <div className="servi">
                    <div className={`servi-str ${showServi ? "show" : ""}`}>
                        <h3>Мужская стрижка</h3>
                        <div>
                            _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                            _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                             _ _ _ _ _ _ _
                        </div>
                        <span>от 150 сом</span>
                    </div>
                    <div className="servi-str">
                        <h3>Стрижка под насадку</h3>
                        <div>
                            _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                            _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                            _ _ _ _ _ _ _ _ _ _
                        </div>
                        <span>от 100 сом</span>
                    </div>
                    <div className="servi-str">
                        <h3>Стрижка парня до 12-ти лет</h3>
                        <div>
                            _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                            _ _ _ _ _ _  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                        </div>
                        <span>от 100 сом</span>
                    </div>
                    <div className="servi-str">
                        <h3>Стрижка ус и бородыа</h3>
                        <div>
                            _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                            _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                            _ _ _ _ _ _ _
                        </div>
                        <span>от 400 сом</span>
                    </div>
                    <div className="servi-str">
                        <h3>Стрижка под насадку + борода</h3>
                        <div>
                            _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                            _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                        </div>
                        <span>от 500 сом</span>
                    </div>

                    {showServi && (
                        <>
                            <div className="servi-str">
                                <h3>Бритье головы</h3>
                                <div>
                                    _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                                    _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                                    _ _ _ _
                                </div>
                                <span>от 100 сом</span>
                            </div>
                            <div className="servi-str">
                                <h3>Королевское бритье</h3>
                                <div>
                                    _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                                    _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                                    _ _ _ _ _
                                </div>
                                <span>от 500 сом</span>
                            </div>
                            <div className="servi-str">
                                <h3>Корейская укладка</h3>
                                <div>
                                    _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                                    _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</div>
                                <span>от 600 сом</span>
                            </div>
                            <div className="servi-str">
                                <h3>Корейская стрижка</h3>
                                <div>
                                    _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                                    ___ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                                    _ _ _ _ _ _ _
                                </div>
                                <span>от 670 сом</span>
                            </div>
                        </>
                    )}
                    <button onClick={handleShowAllServis}>Все</button>
                </div>
            </div>
        </div>
    );
};

export default Servi;