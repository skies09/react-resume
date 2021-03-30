import React, { Component } from 'react';

class Social extends Component {
    render() {
        return (
            <div className="social">
                {/* <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a> */}
                {/* <a href="https://www.facebook.com/profile.php?id=100002920786337" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a> */}
                {/* <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-medium-m"></i></a> */}
                <a target='_blank' href='https://www.facebook.com/profile.php?id=100002920786337'><i class='fa fa-facebook'></i></a>
                <a target='_blank' href='https://www.linkedin.com/in/donna-smith-091285'><i class='fa fa-linkedin'></i></a>
                <a target='_blank' href='https://www.instagram.com/boardingtrucker/'><i class='fa fa-instagram'></i></a>
            </div >
        )
    }
}

export default Social