    import React from 'react'
    export default function About(props) {
        // const [mystyle,setmystyle] = useState(
        // {
        //     color : 'white',
        //     backgroundColor : '#36454F',
        //     border: '1px rounded',
            
        //     padding : '10px'
        // })
        let mystyle = {
            color : props.mode === 'dark' ? 'white' : 'black',
            backgroundColor : props.mode === 'dark' ? '#36454F' : 'white'
        }
        
    return (
        <div className='container' style={mystyle} >
            <h2>About Us</h2>
            <div class="accordion my-3" id="accordionExample">
        <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
           <strong> About Text Utils</strong>
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={mystyle}>
            <div class="accordion-body">
            <strong>Text Utils is a simple yet powerful text manipulation tool designed to streamline common text-related tasks. Whether you're a developer, writer, or just someone who works with text, Text Utils provides an intuitive interface to analyze and transform text with ease.</strong> 
            </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
            <strong>Key Features</strong>
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style={mystyle}>
            <div class="accordion-body">
            <ul typeof='1'>
            <li><strong>Word Count & Character Count: Quickly count the number of words and characters in your text to track length or size.</strong></li>
            <li><strong>Case Conversion: Convert your text to uppercase, lowercase, or sentence case with a single click.</strong></li>
            <li><strong>Whitespace Removal: Clean up your text by removing unnecessary spaces between words or at the start and end of sentences.</strong></li>
            <li><strong>Text Copy: Easily copy the transformed text with one click to use in other applications.</strong></li>
            <li><strong>Dark Mode Support: Work comfortably with a built-in dark mode for low-light environments.</strong></li>
            <li><strong>Real-time Alerts: Receive real-time feedback and notifications while using the app, ensuring a smooth and interactive user experience.</strong></li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    </div>
    )
    }
