import React from "react"
import io from "socket.io-client"
import "./App.css"


const socket = io.connect('http://localhost:5000')
function App() {
	return <div>react app</div>
}

export default App
