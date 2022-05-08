/*
 * Project: portfolio-3.0
 * Author: Dominik Obłoza
 * User: @BLOCKYe
 * Date: 18.04.2022
 * Time: 23:21
*/

import type {NextPage} from 'next'
import Head from 'next/head'
import React from "react";
import Link from 'next/link'
import Back from "../assets/icons/backicon.svg";
import Topbar from '../components/common/Topbar/Topbar';
import Footer from '../components/common/Footer/Footer';
import {Input} from "@chakra-ui/input";
import {Button, Textarea} from "@chakra-ui/react";
import DividerHorizontal from "../components/common/Divider/DividerHorizontal";
import {IFormData} from "../interfaces/types";
import Repository from "../kernel/Repository";

interface IStateContact {
    fullName: string,
    email: string,
    topic: string,
    message: string,
    isProcessing: boolean,
    isSend: boolean
}

export default class Contact extends React.Component<NextPage, IStateContact> {

    private readonly repository: Repository;

    constructor(props: any) {
        super(props);

        this.repository = new Repository();

        this.state = {
            fullName: '',
            email: '',
            topic: '',
            message: '',
            isProcessing: false,
            isSend: false
        }

        // Bind all handlers
        this.handleFullName = this.handleFullName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleTopic = this.handleTopic.bind(this)
        this.handleMessage = this.handleMessage.bind(this)

        // Bind submit form
        this.submitForm = this.submitForm.bind(this)
    }


    /* <--- Input handlers ---> */

    private handleFullName(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({fullName: e.target.value});
    }

    private handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({email: e.target.value});
    }

    private handleTopic(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({topic: e.target.value});
    }

    private handleMessage(e: React.ChangeEvent<HTMLTextAreaElement>) {
        this.setState({message: e.target.value});
    }


    /**
     * This method is used to
     * validate form fields
     * @private
     */

    private formValidation(): boolean {
        if (this.state.fullName.length < 2) return true;
        if (this.state.email.length < 2) return true;
        if (this.state.topic.length < 2) return true;
        if (this.state.message.length < 5) return true;
        if (this.state.isProcessing) return true

        return false;
    }


    /**
     * This method is used to
     * submit form and send email
     * @param e
     * @private
     */

    public async submitForm(e: React.SyntheticEvent) {
        e.preventDefault()

        if (this.formValidation()) return;

        const data: IFormData = {
            fullName: this.state.fullName,
            email: this.state.email,
            topic: this.state.topic,
            message: this.state.message
        }

        // send mail
        this.setState({isProcessing: true});
        try {
            const response = await this.repository.sendEmail(data);
            this.setState({isProcessing: false, isSend: true});
            this.clearForm()

        } catch (e: any) {
            this.setState({isProcessing: false});
            alert('Something went wrong')
        }

    }


    /**
     * This method is used to
     * clear form and set
     * initial data
     * @private
     */

    private clearForm() {
        this.setState({
            fullName: '',
            email: '',
            topic: '',
            message: ''
        });
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Contact - Dominik Obłoza</title>
                    <meta name="description"
                        content="Dominik Obłoza - Frontend developer, UI Designer, Digital Creator and Inspirer" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>


                {/* <--- Page content wrapper ---> */}
                <div className={'grid justify-center'}>
                    <div className="max-w-5xl w-full p-5 py-10 flex flex-col min-h-screen">

                        {/* <--- Top bar navigation ---> */}
                        <Topbar selected={'contact'} />

                        <Link href={'/'} passHref>
                            <div
                                className={'flex items-center gap-3 mt-10 md:mt-20 cursor-pointer text-justWhite-dark text-sm hover:text-justWhite-light transition-all group animation-fade-2'}>
                                <Back className={'flex transition-all group-hover:-translate-x-1.5'} />
                                <div>
                                    Back to home page
                                </div>
                            </div>
                        </Link>

                        {/* <--- Header ---> */}
                        <div className="text-3xl md:text-4xl text-justWhite-light animation-fade-1 mt-5">
                            Contact form
                        </div>

                        <div
                            className="mt-10 text-justWhite-dark text-md md:text-xl animation-fade-2 text-justify md:text-left">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eum nihil nisi
                            obcaecati
                            officiis, optio pariatur quisquam rerum unde. Dignissimos doloremque laboriosam molestiae
                            nemo,
                            officiis omnis quo reiciendis sapiente voluptates!
                        </div>

                        {/* <--- Form ---> */}
                        {!this.state.isSend && (
                            <form className="mt-20 animation-fade-3">
                                <div className="grid gap-3">
                                    <div className="text-sm">
                                        What is your full name?
                                    </div>
                                    <Input variant={'filled'} type={'text'} placeholder={'Your name...'}
                                        value={this.state.fullName} onChange={this.handleFullName} disabled={this.state.isProcessing}
                                        className={'focus:!border-extra-color !bg-justDark-light !border-[1px] !text-sm'} />
                                </div>

                                <div className="grid gap-3 mt-10">
                                    <div className="text-sm">
                                        What is your email address?
                                    </div>
                                    <Input variant={'filled'} type={'email'} placeholder={'Your email...'}
                                        value={this.state.email} onChange={this.handleEmail} disabled={this.state.isProcessing}
                                        className={'focus:!border-extra-color !bg-justDark-light !border-[1px] !text-sm'} />
                                </div>

                                <div className="grid gap-3 mt-10">
                                    <div className="text-sm">
                                        Please state the subject of your message
                                    </div>
                                    <Input variant={'filled'} type={'text'} placeholder={'Topic...'}
                                        value={this.state.topic} onChange={this.handleTopic} disabled={this.state.isProcessing}
                                        className={'focus:!border-extra-color !bg-justDark-light !border-[1px] !text-sm'} />
                                </div>

                                <div className="grid gap-3 mt-10">
                                    <div className="text-sm">
                                        Enter the content of your message
                                    </div>
                                    <Textarea variant={'filled'} placeholder={'Your message...'} rows={8}
                                        value={this.state.message} onChange={this.handleMessage} disabled={this.state.isProcessing}
                                        className={'focus:!border-extra-color !bg-justDark-light !border-[1px] !text-sm'} />
                                </div>

                                <div className="mt-10 flex gap-3 md:gap-5 justify-end items-center">
                                    <div className={'w-full'}>
                                        <DividerHorizontal />
                                    </div>
                                    <Button variant={'unstyled'} type={'submit'} disabled={this.formValidation()}
                                        onClick={this.submitForm} isLoading={this.state.isProcessing}
                                        loadingText={'Sending'}
                                        className={'!rounded !bg-justDark-light !py-2 !px-5 !transition-all ' +
                                            '!cursor-pointer hover:!text-extra-color !flex !gap-3 !box-border' +
                                            ' !w-full md:!w-auto disabled:!cursor-not-allowed'}>
                                        Send
                                    </Button>
                                </div>
                            </form>
                        )}

                        {this.state.isSend && (
                            <div className={'mt-20 animation-fade-3 tex grid gap-3 place-items-center text-center'}>
                                <div className="text-2xl text-extra-color">
                                    Your message has been sent!
                                </div>

                                <div className="text-sm text-center text-justWhite-dark">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quo.
                                </div>
                            </div>
                        )}

                        {/* <--- Footer ---> */}
                        <div className={'mt-auto'}>
                            <Footer />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


