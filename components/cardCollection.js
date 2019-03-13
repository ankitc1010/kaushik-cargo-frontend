import React, { Component } from 'react';
import { Card, Icon, Image, Header, Container, Grid, Modal, Button } from "semantic-ui-react";
class Cards extends Component {
    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

     

    
    render() {
        return (
            <div>
                <h1 className="hah">BUSINESS PLAN</h1>
                <div className="cards">
                    <Grid>
                        <Grid.Row columns={3}>

                            <Grid.Column>
                                <Card>
                                    <Image src='http://gemar.com.tr/wp-content/uploads/2014/12/gemar-shipping-business-scope.jpg' />
                                    <Card.Content>
                                        <Card.Header>SAMPLE 1</Card.Header>

                                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                    <Modal
                                    trigger={<a onClick={this.handleOpen}><Icon name='arrow right' />Read More</a>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          inverted
          size='big'
        >
    <a onClick={this.handleClose} style={{float:"right"}}><Icon name="close"  size="huge"></Icon></a>
        <Modal.Header style={{fontSize:20}}>
            SAMPLE 1
        </Modal.Header>
      <Image centered size='medium' src='http://gemar.com.tr/wp-content/uploads/2014/12/gemar-shipping-business-scope.jpg'/>
      <Modal.Description style={{margin:10}}>

        <p style={{fontSize:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Modal.Description>

    
  </Modal>
        
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column>

                                <Card>
                                    <Image src='http://www.genesisfreight.co.uk/wp-content/uploads/2012/05/28624.jpg'/>
                                    <Card.Content>
                                        <Card.Header>SAMPLE 2</Card.Header>

                                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                    <Modal
                                    trigger={<a onClick={this.handleOpen}><Icon name='arrow right' />Read More</a>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          inverted
          size='big'
        >
    <a onClick={this.handleClose} style={{float:"right"}}><Icon name="close"  size="huge"></Icon></a>
        <Modal.Header style={{fontSize:20}}>
            SAMPLE 2
        </Modal.Header>
      <Image centered size='medium' src='http://gemar.com.tr/wp-content/uploads/2014/12/gemar-shipping-business-scope.jpg'/>
      <Modal.Description style={{margin:10}}>

        <p style={{fontSize:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Modal.Description>

    
  </Modal>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column>

                                <Card>
                                    <Image src='http://www.greekshippingmiracle.org/online/images/Founding-Supporters/Costamare/17_MSC_CHINA_1978_1991.jpg' />
                                    <Card.Content>
                                        <Card.Header>SAMPLE 3</Card.Header>

                                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                    <Modal
                                    trigger={<a onClick={this.handleOpen}><Icon name='arrow right' />Read More</a>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          inverted
          size='big'
        >
    <a onClick={this.handleClose} style={{float:"right"}}><Icon name="close"  size="huge"></Icon></a>
        <Modal.Header style={{fontSize:20}}>
            SAMPLE 3
        </Modal.Header>
      <Image centered size='medium' src='http://gemar.com.tr/wp-content/uploads/2014/12/gemar-shipping-business-scope.jpg'/>
      <Modal.Description style={{margin:10}}>

        <p style={{fontSize:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Modal.Description>

    
  </Modal>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>

                        </Grid.Row>
                        <Grid.Row columns={3}>

                            <Grid.Column>
                                <Card>
                                    <Image src='data:image/jpeg;base64,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' />
                                    <Card.Content>
                                        <Card.Header>SAMPLE 4</Card.Header>

                                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                    <Modal
                                    trigger={<a onClick={this.handleOpen}><Icon name='arrow right' />Read More</a>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          inverted
          size='big'
        >
    <a onClick={this.handleClose} style={{float:"right"}}><Icon name="close"  size="huge"></Icon></a>
        <Modal.Header style={{fontSize:20}}>
            SAMPLE 4
        </Modal.Header>
      <Image centered size='medium' src='http://gemar.com.tr/wp-content/uploads/2014/12/gemar-shipping-business-scope.jpg'/>
      <Modal.Description style={{margin:10}}>

        <p style={{fontSize:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Modal.Description>

    
  </Modal>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column>

                                <Card>
                                    <Image src='http://jship.sakura.ne.jp/wp/wp-content/uploads/business/business2_1.png' />
                                    <Card.Content>
                                        <Card.Header>SAMPLE 5</Card.Header>

                                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                    <Modal
                                    trigger={<a onClick={this.handleOpen}><Icon name='arrow right' />Read More</a>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          inverted
          size='big'
        >
    <a onClick={this.handleClose} style={{float:"right"}}><Icon name="close"  size="huge"></Icon></a>
        <Modal.Header style={{fontSize:20}}>
            SAMPLE 5
        </Modal.Header>
      <Image centered size='medium' src='http://gemar.com.tr/wp-content/uploads/2014/12/gemar-shipping-business-scope.jpg'/>
      <Modal.Description style={{margin:10}}>

        <p style={{fontSize:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Modal.Description>

    
  </Modal>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column>

                                <Card>
                                    <Image src='https://images.wisegeek.com/container-ship-from-above.jpg' />
                                    <Card.Content>
                                        <Card.Header>SAMPLE 6</Card.Header>

                                        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                    <Modal
                                    trigger={<a onClick={this.handleOpen}><Icon name='arrow right' />Read More</a>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          inverted
          size='big'
        >
    <a onClick={this.handleClose} style={{float:"right"}}><Icon name="close"  size="huge"></Icon></a>
        <Modal.Header style={{fontSize:20}}>
            SAMPLE 6
        </Modal.Header>
      <Image centered size='medium' src='http://gemar.com.tr/wp-content/uploads/2014/12/gemar-shipping-business-scope.jpg'/>
      <Modal.Description style={{margin:10}}>

        <p style={{fontSize:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Modal.Description>

    
  </Modal>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>

                        </Grid.Row>

                    </Grid>

                </div>


                <style jsx>
                    {`
                .hah{
                    color: black;
                    margin-bottom:50px;
                    margin-left: 30px;
                }
                .cards{
                    display: flex;
                    flex-wrap: wrap;
                    margin-bottom: 60px;
                    margin-left: 40px;

                    justify-content: space-evenly;
                }
                `
                    }</style>
            </div>
        );
    }
}

export default Cards;