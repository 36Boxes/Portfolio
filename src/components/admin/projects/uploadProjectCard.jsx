import React, { useEffect, useState} from "react";
import axios from "axios";
import { Card, CardBody, CardHeader, Col, Container, Form, Row, Input, NavLink } from "reactstrap";
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from "react-cookie";



const UploadProjectCard = (props) => {

    const [state, setState ] = useState({
        selectedFile1: null,
        selectedFile2: null,
        selectedFile3: null,
        title : null,
        para1 : null,
        para2 : null,
        tech : null,
        github_live : 0,
        github_link : null,
        project_live : 0,
        project_link : null,
        photo1 : null,
        photo2 : null,
        photo3 : null,
        carousel : 0,
        files : 0,
        uploaded : false

    })

    const navigate = useNavigate();

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const { project_id } = useParams()

    useEffect(() => {
        if (project_id === undefined){


        } else {
            axios.get(`${process.env.REACT_APP_URL}projects/${project_id}`, {
                headers: {
                    'Access-Control-Allow-Origin' : '*'
                    },
                }).then(res => {
                    if (res.data.length === 0){

                        navigate("/admin/projects/create")

                    } else {

                        if (res.data[0].github_live === 0){
                            console.log("he")
                            var github_live = false
                        } else {
                            var github_live = true
                        }

                        if (res.data[0].project_live === 0){
                            var project_live = false
                        } else {
                            var project_live = true
                        }

                        if (res.data[0].carousel === 0){
                            var carousel = false
                        } else {
                            var carousel = true
                        }

                        setState({
                            title: res.data[0].title,
                            tech : res.data[0].tech_used,
                            project_link : res.data[0].project_link,
                            project_live : project_live,
                            github_link : res.data[0].github_link,
                            github_live : github_live,
                            para1 : res.data[0].paragraph_one,
                            para2 : res.data[0].paragraph_two,
                            filePath1 : res.data[0].image1_path,
                            filePath2 : res.data[0].image2_path,
                            filePath3 : res.data[0].image3_path,
                            carousel: carousel,
                            files : 0,
                            uploaded : true
                        })
                    }
            })
        }
    }, [])


    const fileHandler = (option, event) => {
        if (project_id === undefined){
            state[option] = event.target.files[0]
            setState({
                ...state,
                files : state.files + 1,
                newFile : true
            })
        } else {
            setState({
                ...state,
                [option] : event.target.files[0],
                files : state.files + 1,
                newFile : true
            })
        }
    }

    const getText = (option, event) =>{
        if (project_id === undefined){
        state[option] = event.target.value
        } else {
            setState({
                ...state,
                [option] : event.target.value
            })
        }
    }

    const getTickBox = (option, event) =>{
        if (project_id === undefined){
            state[option] = event.target.checked
        } else {
            setState({
                ...state,
                [option] : event.target.checked
            })
        }
    }

    const getform = (event) => {
        event.preventDefault()
        if (project_id === undefined){
            // Because project_id is undefined this means its a creation request not an update one.
            setState({
                ...state,
                title: event.target.title.value,
                tech: event.target.tech.value,
                github_link: event.target.github_link.value,
                project_link: event.target.project_link.value
            })
    
            var fd = new FormData();
            fd.append("images", state.selectedFile1)
            fd.append("images", state.selectedFile2)
            fd.append("images", state.selectedFile3)
            fd.append("title", event.target.title.value)
            fd.append("tech_used", event.target.tech.value)
            fd.append("paragraph_one", state.para1)
            fd.append("paragraph_two", state.para2)
            fd.append("github_live", state.github_live)
            fd.append("github_link", event.target.github_link.value)
            fd.append("project_live", state.project_live)
            fd.append("project_link", event.target.project_link.value)
            fd.append("carousel", state.carousel)
            fd.append("fileCount", state.files)
            axios.post(`${process.env.REACT_APP_URL}projects/create`, fd , {
                headers: {
                    'Content-Type' : 'multipart/form-data',
                    'Access-Control-Allow-Origin' : '*',
                    'Authorization' : cookies.token
                    },
                    withCredentials: false
                }).then(res => {
                setState({
                    ...state,
                    filePath1 : res.data.image1_path,
                    filePath2 : res.data.image2_path,
                    filePath3 : res.data.image3_path,
                    uploaded : true
                })
                navigate(`/admin/projects/${res.data.ID}/edit`)
            })

        } else {
            setState({
                ...state,
                title: event.target.title.value,
                tech: event.target.tech.value,
                github_link: event.target.github_link.value,
                project_link: event.target.project_link.value
            })
    
            const fod = new FormData();
            fod.append("images", state.selectedFile1)
            fod.append("images", state.selectedFile2)
            fod.append("images", state.selectedFile3)
            fod.append("title", event.target.title.value)
            fod.append("tech_used", event.target.tech.value)
            fod.append("paragraph_one", state.para1)
            fod.append("paragraph_two", state.para2)
            fod.append("github_live", state.github_live)
            fod.append("github_link", event.target.github_link.value)
            fod.append("image1_path", state.filePath1)
            fod.append("image2_path", state.filePath2)
            fod.append("image3_path", state.filePath3)
            fod.append("newFile", state.newFile)
            fod.append("project_live", state.project_live)
            fod.append("project_link", event.target.project_link.value)
            fod.append("carousel", state.carousel)
            fod.append("fileCount", state.files)
            console.log(fod)
            console.log(state)
            axios.put(`${process.env.REACT_APP_URL}projects/${project_id}`, fod , {
                headers: {
                    'Content-Type' : 'multipart/form-data',
                    'Access-Control-Allow-Origin' : '*',
                    'Authorization' : cookies.token
                    },
                    withCredentials: false
                }).then(res => {
                    console.log(res)
                setState({
                    ...state,
                    filePath1 : res.data.image1_path,
                    filePath2 : res.data.image2_path,
                    filePath3 : res.data.image3_path,
                    uploaded : true
                })
                navigate(`/admin/projects/${res.data.ID}/edit`)
            })
        }
    }




    return (
        <Card className="shadow">
        <CardHeader>
            <Row>
                <Col md='2'><NavLink href={`/admin/projects/all`}><button className="btn btn-danger"><i className="fas fa-backward"></i></button></NavLink></Col>
                <Col md='8'><h3 className="text-center">Upload A Past Project</h3></Col>
            </Row>
        </CardHeader>
        <CardBody>
            <Container className="text-center">
                <Form onSubmit={getform}>
                    <Row>
                        <Col md="2">
                            <h6 className="pt-2">Project Title</h6>
                        </Col>
                        <Col>
                            <Input
                                className="form-control-alternative"
                                placeholder={`Enter a project title`}
                                type="title"
                                name={`title`}
                                value={state.title}
                                onChange={(e) => getText("title", e)}
                            />
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="2">
                            <h6 className="pt-2">Paragraph 1</h6>
                        </Col>
                        <Col>
                            <Input
                                className="form-control-alternative"
                                placeholder="Write a large text here ..."
                                rows="3"
                                type="textarea"
                                value={state.para1}
                                onChange={(e) => getText("para1", e)}
                            />
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="2">
                            <h6 className="pt-2">Paragraph 2</h6>
                        </Col>
                        <Col>
                            <Input
                                className="form-control-alternative"
                                placeholder="Write a large text here ..."
                                rows="3"
                                type="textarea"
                                value={state.para2}
                                onChange={(e) => getText("para2", e)}
                            />
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="2">
                            <h6 className="pt-2">Tech Used </h6>
                        </Col>
                        <Col>
                            <Input
                                className="form-control-alternative"
                                placeholder={`Enter the tech used`}
                                type="tech"
                                name={`tech`}
                                value={state.tech}
                                onChange={(e) => getText("tech", e)}
                            />
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="2">
                            <h6 className="pt-2">Project Live</h6>
                        </Col>
                        <Col>
                            <div className="custom-control custom-checkbox pt-3">
                                <input
                                    className="custom-control-input"
                                    id="project_live"
                                    type="checkbox"
                                    name="project_live"
                                    value={state.project_live}
                                    onChange={(e) => getTickBox("project_live", e)}
                                />
                                <label className="custom-control-label" htmlFor="project_live">
                                </label>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="2">
                            <h6 className="pt-2">Project Link</h6>
                        </Col>
                        <Col>
                            <Input
                                className="form-control-alternative"
                                placeholder={`Enter a project link`}
                                type="project_link"
                                name={`project_link`}
                                value={state.project_link}
                                onChange={(e) => getText("project_link", e)}
                            />
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="2">
                            <h6 className="pt-2">Github Live</h6>
                        </Col>
                        <Col>
                            <div className="custom-control custom-checkbox pt-3">
                                <input
                                    className="custom-control-input"
                                    id="github_live"
                                    type="checkbox"
                                    name="github_live"
                                    value={state.github_live}
                                    onChange={(e) => getTickBox("github_live", e)}
                                />
                                <label className="custom-control-label" htmlFor="github_live">
                                </label>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="2">
                            <h6 className="pt-2">Github Link</h6>
                        </Col>
                        <Col>
                            <Input
                                className="form-control-alternative"
                                placeholder={`Enter the github link`}
                                type="github_link"
                                name={`github_link`}
                                value={state.github_link}
                                onChange={(e) => getText("github_link", e)}
                            />
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="2">
                            <h6 className="pt-2">Photo 1</h6>
                        </Col>
                        <Col>
                            <div className='btn btn-primary btn-block'>
                                <input type='file' id='single' onChange={(e) => { fileHandler("selectedFile1", e)}}/>
                                <i class="far fa-image"></i>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="2">
                            <h6 className="pt-2">Photo 1 Preview</h6>
                        </Col>
                        <Col>
                            <Container>
                                <img alt="..." src={`${process.env.REACT_APP_URL}` + state.filePath1} height={200} width={200}/>
                            </Container>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="2">
                            <h6 className="pt-2">Photo 2</h6>
                        </Col>
                        <Col>
                            <div className='btn btn-primary btn-block'>
                                <input type='file' id='single' onChange={(e) => { fileHandler("selectedFile2", e)}} />
                                <i class="far fa-image"></i>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="2">
                            <h6 className="pt-2">Photo 2 Preview</h6>
                        </Col>
                        <Col>
                            <Container>
                                <img alt="..." src={`${process.env.REACT_APP_URL}` + state.filePath2} height={200} width={200}/>
                            </Container>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="2">
                            <h6 className="pt-2">Photo 3</h6>
                        </Col>
                        <Col>
                            <div className='btn btn-primary btn-block'>
                                <input type='file' id='single' onChange={(e) => { fileHandler("selectedFile3", e)}} />
                                <i class="far fa-image"></i>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md="2">
                            <h6 className="pt-2">Photo 3 Preview</h6>
                        </Col>
                        <Col>
                            <Container>
                                <img alt="..." src={`${process.env.REACT_APP_URL}` + state.filePath3} height={200} width={200}/>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="2">
                            <h6 className="pt-2">Carousel</h6>
                        </Col>
                        <Col>
                            <div className="custom-control custom-checkbox pt-3">
                                <input
                                    className="custom-control-input"
                                    id="carousel"
                                    type="checkbox"
                                    name="carousel"
                                    value={state.carousel}
                                    onChange={(e) => getTickBox("carousel", e)}
                                />
                                <label className="custom-control-label" htmlFor="carousel">
                                </label>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <button type="submit" className={`btn btn-outline-success btn-block`}>Upload Past Project</button>
                </Form>
            </Container>
        </CardBody>
    </Card>
    );
    
}

export default UploadProjectCard;