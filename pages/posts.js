import Head from "next/head";
import {MainLayout} from "../components/MainLayout";

export default function Posts() {
    return (
        <MainLayout title={'Posts page'}>
            <h1>Posts Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </MainLayout>
    )
}