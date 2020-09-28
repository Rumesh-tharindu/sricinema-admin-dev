import React from 'react'

export default function Home() {
    return (
        <div>
            
            <div className=" p-5">
                <div className="row">
                    <div className="col-md-4 p-2">
                        <div className="info  text-center">
                            <h1 className="pt-2">Movies</h1>
                            <p>179</p>
                        </div>
                    </div>
                    <div className="col-md-4 p-2">
                    <div className="info  text-center">
                            <h1 className="p-2">TV show</h1>
                            <p>30</p>
                        </div>
                    </div>
                    <div className="col-md-4 p-2">
                    <div className="info  text-center">
                            <h1 className="p-2">Darama</h1>
                            <p>40</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-4 p-2">
                    <div className="info  text-center">
                            <h1 className="p-2">Audience</h1>
                            <p>40</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
