import React, { Component } from 'react';
import { Form, Dropdown, Embed, Grid, Button, Card,Icon, Header } from 'semantic-ui-react';

const description = [
   {
       key:'member1',
       bio: 'Amy is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.'
    }

  ]

const countryOptions = [
    {
    key: "AN",
    value: "AN",
    text: "Andaman and Nicobar Islands"
    },
    {
    key: "AP",
    value: "AP",
    text: "Andhra Pradesh"
    },
    {
    key: "AR",
    value: "AR",
    text: "Arunachal Pradesh"
    },
    {
    key: "AS",
    value: "AR",
    text: "Assam"
    },
    {
    key: "BR",
    value: "BR",
    text: "Bihar"
    },
    {
    key: "CG",
    value: "CG",
    text: "Chandigarh"
    },
    {
    key: "CH",
    value: "CH",
    text: "Chhattisgarh"
    },
    {
    key: "DH",
    value: "DH",
    text: "Dadra and Nagar Haveli"
    },
    {
    key: "DD",
    value: "DD",
    text: "Daman and Diu"
    },
    {
    key: "DL",
    value: "DL",
    text: "Delhi"
    },
    {
    key: "GA",
    value: "GA",
    text: "Goa"
    },
    {
    key: "GJ",
    value: "GJ",
    text: "Gujarat"
    },
    {
    key: "HR",
    value: "HR",
    text: "Haryana"
    },
    {
    key: "HP",
    value: "HP",
    text: "Himachal Pradesh"
    },
    {
    key: "JK",
    value: "JK",
    text: "Jammu and Kashmir"
    },
    {
    key: "JH",
    value: "JH",
    text: "Jharkhand"
    },
    {
    key: "KA",
    value: "KA",
    text: "Karnataka"
    },
    {
    key: "KL",
    value: "KL",
    text: "Kerala"
    },
    {
    key: "LD",
    value: "LD",
    text: "Lakshadweep"
    },
    {
    key: "MP",
    value: "MP",
    text: "Madhya Pradesh"
    },
    {
    key: "MH",
    value: "MH",
    text: "Maharashtra"
    },
    {
    key: "MN",
    value: "MN",
    text: "Manipur"
    },
    {
    key: "ML",
    value: "ML",
    text: "Meghalaya"
    },
    {
    key: "MZ",
    value: "MZ",
    text: "Mizoram"
    },
    {
    key: "NL",
    value: "NL",
    text: "Nagaland"
    },
    {
    key: "OR",
    value: "OR",
    text: "Odisha"
    },
    {
    key: "PY",
    value: "PY",
    text: "Puducherry"
    },
    {
    key: "PB",
    value: "PB",
    text: "Punjab"
    },
    {
    key: "RJ",
    value: "RJ",
    text: "Rajasthan"
    },
    {
    key: "SK",
    value: "SK",
    text: "Sikkim"
    },
    {
    key: "TN",
    value: "TN",
    text: "Tamil Nadu"
    },
    {
    key: "TS",
    value: "TS",
    text: "Telangana"
    },
    {
    key: "TR",
    value: "TR",
    text: "Tripura"
    },
    {
    key: "UK",
    value: "UK",
    text: "Uttar Pradesh"
    },
    {
    key: "UP",
    value: "UP",
    text: "Uttarakhand"
    },
    {
    key: "WB",
    value: "WB",
    text: "West Bengal"
    }
    ]
class contactForms extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{margin:50}}>

            <Grid>
                    <Grid.Row  style={{marginTop:20}}>
                        <Header as='h1'>Wish  to  send  us  a  message?  Use  the  form  below. </Header>
                    </Grid.Row>
                    <Grid.Column computer={16} tablet={16} mobile={16}>
                    <Form size="massive">
                    <Form.Field > 
                        <label> <h2>Select Location</h2></label>
                        <Dropdown style={{marginTop:20}}
                        size="massive"
                         placeholder='Select state'
                         fluid
                         search
                         selection
                         options={countryOptions}
                         />
                    </Form.Field>
                </Form></Grid.Column>
                <Grid.Row>
                    <p className="big" style={{margin:20}}>This is our address. ##############</p>
                </Grid.Row>
                    <Grid.Column computer={8} mobile={16}>
                    <Embed 
                    placeholder='https://i.stack.imgur.com/QcLwM.png'
                    url='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2487.2598192004775!2d77.59948262056825!3d12.906515532380018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1552887237787' 
                    />
                    </Grid.Column>
                    <Grid.Column computer={8} mobile={16}>
                        
                        <Form size="massive">
                        <Form.Group widths='equal'>
                        <Form.Input  placeholder='Full name'/>
                        <Form.Input  placeholder='Email'/>
                         </Form.Group>
                        </Form>


                         <Form size="massive">
                         <Form.Group widths='equal'>
                         <Form.Input placeholder='Phone'/>
                         <Form.Input placeholder='Subject'/>
                         </Form.Group>

                         </Form>
                         <Form size="massive">
                         <Form.TextArea label='MESSAGE' placeholder='What do you want to let us know?' />
                         <Button size="massive" primary style={{margin:10}}>Submit</Button>

                         </Form>


                        

                    </Grid.Column>
                    

                </Grid>

                
                <style jsx>{`
                .big{
                    font-size:20px;
                }
                `}</style>
                </div>

         );
    }
}
 
export default contactForms;