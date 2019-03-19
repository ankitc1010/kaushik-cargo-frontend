import React, { Component } from 'react';
import { Card, Icon, Grid } from 'semantic-ui-react';

class ContactCards extends Component {
    state = {}
    render() {
        return (
            <div style={{ margin: 50 }}>
                <h1 className="contact"> CONTACT US</h1>
                <Grid >

                <Grid.Column computer={15} tablet={16} mobile={16}>
                        <Card fluid>
                            
                            <Card.Content> <Icon name="user circle" color='blue' size='huge'></Icon><h1>Company Private Limited</h1></Card.Content>
                            <Card.Content description={'Johny Smith is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.'} />
                            <Card.Content extra>
                                <Icon name='phone' flipped='horizontally' />
                                Phone number
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name='mail' />
                                Email
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    
                    <Grid.Column computer={5} tablet={8} mobile={16}>
                        <Card fluid>
                            <Card.Content header='Johny Smith' />
                            <Card.Content description={'Johny Smith is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.'} />
                            <Card.Content extra>
                                <Icon name='phone' flipped='horizontally' />
                                Phone number
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name='mail' />
                                Email
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column computer={5} tablet={8} mobile={16}>
                        <Card fluid>
                            <Card.Content header='Johny Smith' />
                            <Card.Content description={'Johny Smith is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.'} />
                            <Card.Content extra>
                                <Icon name='phone' flipped='horizontally' />
                                Phone number
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name='mail' />
                                Email
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column computer={5} tablet={8} mobile={16}>
                        <Card fluid>
                            <Card.Content header='Johny Smith' />
                            <Card.Content description={'Johny Smith is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.'} />
                            <Card.Content extra>
                                <Icon name='phone' flipped='horizontally' />
                                Phone number
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name='mail' />
                                Email
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column computer={5} tablet={8} mobile={16}>
                        <Card fluid>
                            <Card.Content header='Johny Smith' />
                            <Card.Content description={'Johny Smith is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.'} />
                            <Card.Content extra>
                                <Icon name='phone' flipped='horizontally' />
                                Phone number
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name='mail' />
                                Email
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column computer={5} tablet={8} mobile={16}>
                        <Card fluid>
                            <Card.Content header='Johny Smith' />
                            <Card.Content description={'Johny Smith is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.'} />
                            <Card.Content extra>
                                <Icon name='phone' flipped='horizontally' />
                                Phone number
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name='mail' />
                                Email
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column computer={5} tablet={8} mobile={16}>
                        <Card fluid>
                            <Card.Content header='Johny Smith' />
                            <Card.Content description={'Johny Smith is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.'} />
                            <Card.Content extra>
                                <Icon name='phone' flipped='horizontally' />
                                Phone number
                            </Card.Content>
                            <Card.Content extra>
                                <Icon name='mail' />
                                Email
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid>


                <style jsx>
                    {`.contact{
                        margin-bottom:25px;
                    }
                    
                 
                 `}</style>
            </div>
        );
    }
}

export default ContactCards;