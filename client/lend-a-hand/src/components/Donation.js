import React from 'react';
import './Donation.css';

function Donation(){
    return (
            <body>
                <div class="donation-container">
                
                <div class="donation-box">
                    <div class="title">Donation Information</div>
                    
                    <div class="fields">
                        <input type="text" id="firstName" placeholder="First Name" />
                        <input type="text" id="lastName" placeholder="Last Name" />
                        <input type="text" id="email" placeholder="Email" />
                    </div>
                    
                    <div class="amount">
                        <div class="button">$30</div>
                        <div class="button">$50</div>
                        <div class="button">$100</div>
                        <div class="button">$<input type="text" class="set-amount" placeholder="" /></div>
                    </div>
                    
                    <div class="checkboxes">
                        <input type="checkbox" id="receipt" class="checkbox" />
                        <label for="receipt">Email Me A Receipt</label>
                        <br />
                        <input type="checkbox" id="anon" class="checkbox" />
                        <label for="anon">Give Anonymously</label>
                        <br />
                        <input type="checkbox" id="list" class="checkbox" />
                        <label for="list">Add Me To Email List</label>
                    </div>
                    
                    <div class="confirm">
                    
                    </div>
                    <div class="donate-button"><i class="fa fa-credit-card"></i> Donate Now</div>
                </div>
                
                </div>

                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
                <script src="https://raw.githubusercontent.com/jerryluk/jquery.autogrow/master/jquery.autogrow-min.js"></script>
            </body>
    )
}

export default Donation;