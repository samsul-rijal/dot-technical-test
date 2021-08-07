import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import './Movies.css'

const Movies = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState([])
    const [movieById, setMovieById] = useState({})

    const [input, setInput] = useState("")
    const [output, setOutput] = useState([])

    const [isLoading, setIsLoading] = useState("")

    const [user, setUser] = useState({})

    const getData = async () => {
        try {
            setIsLoading("Loading data...")

            const response = await fetch('http://omdbapi.com/?apikey=47c9f168&s=avengers');
            const json = await response.json();
            console.log(json)
            setData(json.Search);

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading('')
        }
    }

    const handleLogout = () => {
        localStorage.clear()
    }

    const getUser = async () => {
        try {
            const user = await JSON.parse(localStorage.getItem('user'));
            console.log(user)
            setUser(user)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        setOutput([])
        data.filter(val => {
            if (val.Title.toLowerCase().includes(input.toLocaleLowerCase())) {
                setOutput(output => [...output, val])
            }
        })
    }, [input])

    return (
        <div>
            <div className="header-movies">
                <p className="name-movies">Movies</p>
                <div className="menu-movies">
                    <p className="user-name">{user.name}</p>
                    <p onClick={handleLogout}><Link to="/" className="button-logout">Logout</Link></p>
                </div>
            </div>

            <input onChange={e => setInput(e.target.value)} type="text" placeholder="Search movie" className="search" />

            <div className="card-content">
                {isLoading && <h1 style={{ fontSize: 20, color: 'grey' }}>{isLoading}</h1>}
                {output.map((movie) => (

                    <div className="header-card" onClick={() => setMovieById(movie)}>
                        <img src={movie.Poster} onClick={handleShow} />
                        <div className="title-card">
                            <p>{(movie.Title.length > 20) ? movie.Title.substring(0, 20) + '...' : movie.Title}</p>
                        </div>
                        <p className="title-year">{movie.Year}</p>
                    </div>
                ))}
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body className="modal-movie">
                    <img src={movieById.Poster} />
                    <p className="name-movie">{movieById.Title}</p>
                    <p className="name-movie">{movieById.Type}</p>
                    <p className="name-movie">{movieById.Year}</p>
                </Modal.Body>
            </Modal>

        </div >

    )
}

export default Movies
