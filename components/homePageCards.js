import React, { Component } from 'react';
import { Card, Icon, Image, Header, Container, Grid, Modal, Button } from "semantic-ui-react";
class Cards extends Component {
    state = {
        modalOpen1: false,
        modalOpen2: false,
        modalOpen3: false,
        modalOpen4: false,
        modalOpen5: false,
        modalOpen6: false
    }

    handleOpen1 = () => this.setState({ modalOpen1: true })
    handleClose1 = () => this.setState({ modalOpen1: false })

    handleOpen2 = () => this.setState({ modalOpen2: true })
    handleClose2 = () => this.setState({ modalOpen2: false })

    handleOpen3 = () => this.setState({ modalOpen3: true })
    handleClose3 = () => this.setState({ modalOpen3: false })

    handleOpen4 = () => this.setState({ modalOpen4: true })
    handleClose4 = () => this.setState({ modalOpen4: false })

    handleOpen5 = () => this.setState({ modalOpen5: true })
    handleClose5 = () => this.setState({ modalOpen5: false })

    handleOpen6 = () => this.setState({ modalOpen6: true })
    handleClose6 = () => this.setState({ modalOpen6: false })




    render() {
        return (
            <div>
                <h1 className="hah">BUSINESS PLAN</h1>
                <div className="cards">
                    <Grid>

                        <Grid.Column computer={5} tablet={8} mobile={16}>
                            <Card fluid>
                                <Image src='http://gemar.com.tr/wp-content/uploads/2014/12/gemar-shipping-business-scope.jpg' />
                                <Card.Content>
                                    <Card.Header>SAMPLE 1</Card.Header>

                                    <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <Modal
                                        trigger={<a onClick={this.handleOpen1}><Icon name='arrow right' />Read More</a>}
                                        open={this.state.modalOpen1}
                                        onClose={this.handleClose1}
                                        inverted
                                        size='big'
                                    >
                                        <a onClick={this.handleClose1} style={{ float: "right" }}><Icon name="close" size="huge"></Icon></a>
                                        <Modal.Header style={{ fontSize: 20 }}>
                                            SAMPLE 1  </Modal.Header>
                                        <Image centered size='medium' src='http://gemar.com.tr/wp-content/uploads/2014/12/gemar-shipping-business-scope.jpg' />
                                        <Modal.Description style={{ margin: 10 }}>

                                            <p style={{ fontSize: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </Modal.Description>


                                    </Modal>

                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column computer={5} tablet={8} mobile={16}>

                            <Card fluid >
                                <Image src='http://www.genesisfreight.co.uk/wp-content/uploads/2012/05/28624.jpg' />
                                <Card.Content>
                                    <Card.Header>SAMPLE 2</Card.Header>

                                    <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <Modal
                                        trigger={<a onClick={this.handleOpen2}><Icon name='arrow right' />Read More</a>}
                                        open={this.state.modalOpen2}
                                        onClose={this.handleClose2}
                                        inverted
                                        size='big'
                                    >
                                        <a onClick={this.handleClose2} style={{ float: "right" }}><Icon name="close" size="huge"></Icon></a>
                                        <Modal.Header style={{ fontSize: 20 }}>
                                            SAMPLE 2
        </Modal.Header>
                                        <Image centered size='medium' src='http://gemar.com.tr/wp-content/uploads/2014/12/gemar-shipping-business-scope.jpg' />
                                        <Modal.Description style={{ margin: 10 }}>

                                            <p style={{ fontSize: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </Modal.Description>


                                    </Modal>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column computer={5} tablet={8} mobile={16}>

                            <Card fluid>
                                <Image src='http://www.greekshippingmiracle.org/online/images/Founding-Supporters/Costamare/17_MSC_CHINA_1978_1991.jpg' />
                                <Card.Content>
                                    <Card.Header>SAMPLE 3</Card.Header>

                                    <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <Modal
                                        trigger={<a onClick={this.handleOpen3}><Icon name='arrow right' />Read More</a>}
                                        open={this.state.modalOpen3}
                                        onClose={this.handleClose3}
                                        inverted
                                        size='big'
                                    >
                                        <a onClick={this.handleClose3} style={{ float: "right" }}><Icon name="close" size="huge"></Icon></a>
                                        <Modal.Header style={{ fontSize: 20 }}>
                                            SAMPLE 3
        </Modal.Header>
                                        <Image centered size='medium' src='http://gemar.com.tr/wp-content/uploads/2014/12/gemar-shipping-business-scope.jpg' />
                                        <Modal.Description style={{ margin: 10 }}>

                                            <p style={{ fontSize: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </Modal.Description>


                                    </Modal>
                                </Card.Content>
                            </Card>
                        </Grid.Column>


                        <Grid.Column computer={5} tablet={8} mobile={16}>
                            <Card fluid>
                                <Image src='https://images.wisegeek.com/container-ship-from-above.jpg'></Image>
                                <Card.Content>
                                    <Card.Header>SAMPLE 4</Card.Header>

                                    <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <Modal
                                        trigger={<a onClick={this.handleOpen4}><Icon name='arrow right' />Read More</a>}
                                        open={this.state.modalOpen4}
                                        onClose={this.handleClose4}
                                        inverted
                                        size='big'
                                    >
                                        <a onClick={this.handleClose4} style={{ float: "right" }}><Icon name="close" size="huge"></Icon></a>
                                        <Modal.Header style={{ fontSize: 20 }}>
                                            SAMPLE 4
        </Modal.Header>
                                        <Image centered size='medium' src='https://images.wisegeek.com/container-ship-from-above.jpg' />
                                        <Modal.Description style={{ margin: 10 }}>

                                            <p style={{ fontSize: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </Modal.Description>


                                    </Modal>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column computer={5} tablet={8} mobile={16}>

                            <Card fluid>
                                <Image src='http://jship.sakura.ne.jp/wp/wp-content/uploads/business/business2_1.png' />
                                <Card.Content>
                                    <Card.Header>SAMPLE 5</Card.Header>

                                    <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <Modal
                                        trigger={<a onClick={this.handleOpen5}><Icon name='arrow right' />Read More</a>}
                                        open={this.state.modalOpen5}
                                        onClose={this.handleClose5}
                                        inverted
                                        size='big'
                                    >
                                        <a onClick={this.handleClose5} style={{ float: "right" }}><Icon name="close" size="huge"></Icon></a>
                                        <Modal.Header style={{ fontSize: 20 }}>
                                            SAMPLE 5
        </Modal.Header>
                                        <Image centered size='medium' src='http://gemar.com.tr/wp-content/uploads/2014/12/gemar-shipping-business-scope.jpg' />
                                        <Modal.Description style={{ margin: 10 }}>

                                            <p style={{ fontSize: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </Modal.Description>


                                    </Modal>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column computer={5} tablet={8} mobile={16}>

                            <Card fluid>
                                <Image src='https://images.wisegeek.com/container-ship-from-above.jpg' />
                                <Card.Content>
                                    <Card.Header>SAMPLE 6</Card.Header>

                                    <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <Modal
                                        trigger={<a onClick={this.handleOpen6}><Icon name='arrow right' />Read More</a>}
                                        open={this.state.modalOpen6}
                                        onClose={this.handleClose6}
                                        inverted
                                        size='big'
                                    >
                                        <a onClick={this.handleClose6} style={{ float: "right" }}><Icon name="close" size="huge"></Icon></a>
                                        <Modal.Header style={{ fontSize: 20 }}>
                                            SAMPLE 6
        </Modal.Header>
                                        <Image centered size='medium' src='http://gemar.com.tr/wp-content/uploads/2014/12/gemar-shipping-business-scope.jpg' />
                                        <Modal.Description style={{ margin: 10 }}>

                                            <p style={{ fontSize: 15 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </Modal.Description>


                                    </Modal>
                                </Card.Content>
                            </Card>
                        </Grid.Column>


                    </Grid>

                </div>


                <style jsx>
                    {`
                .hah{
                    color: black;
                    margin-bottom:50px;
                    margin-left: 50px;
                }
                .cards{
                    display: flex;
                    flex-wrap: wrap;
                    margin: 50px;

                    justify-content: space-evenly;
                }
                `
                    }</style>
            </div>
        );
    }
}

export default Cards;