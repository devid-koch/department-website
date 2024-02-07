// @ts-nocheck
import { defaultPadding } from "config/styles";
import { Component, createEffect, createSignal } from "solid-js";
import notification from "assets/images/notice.png"
import Alert from "../../alert";
import { _BASE_URL } from "config/url";

const Features9 = () => {
    const [notices, setNotices] = createSignal([])

    async function fetchNotices(url: any) {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }

    // Example usage:
    const apiUrl = `${_BASE_URL}/NoticeList/65c258b7902f7b5611c1f5a7`;
    fetchNotices(apiUrl)
        .then((result: any) => {
            console.log('Data received:', result);
            setNotices(result)
        })
        .catch((error: any) => {
            console.error('Error:', error);
        });

    function extractDate(dateString: any) {
        const date = new Date(dateString);
        const options = { day: '2-digit' };

        const formattedDate = date.toLocaleDateString('en-US', options);
        return formattedDate;
    }

    const originalDate = '2024-02-07T00:00:00.000Z';
    const result = extractDate(originalDate);


    function extractMonth(dateString: any) {
        const date = new Date(dateString);
        const options = { month: 'short' };

        const month = date.toLocaleDateString('en-US', options);
        return month;
    }




    return (
        <div class={ `bg-white ${defaultPadding}` }>
            <div class="text-center pb-10">
                <h2 class="ChivoFont text-3xl font-black uppercase leading-none tracking-tight text-gray-900 sm:text-4xl">
                    Notification & Updates
                </h2>
            </div>
            <div
                class={ `w-full h-full flex flex-col gap-4 md:flex-row md:justify-between items-center ${defaultPadding}` }>
                <div class="w-full lg:w-1/2 flex flex-col items-center justify-center">
                    <img src={ notification } class="w-3/4 md:w-3/4 h-3/4" />
                </div>
                <div class="w-full lg:w-1/2 flex flex-col gap-4">
                    { notices()?.map((item: any) => (
                        <Alert details={ item.details } month={ extractMonth(item.date) } date={ extractDate(item.date) } />
                    )) }
                    {/* <div class="flex flex-col items-end hover:cursor-pointer">
            <div class="flex text-base text-primary font-semibold">View All</div>
            <div class="w-14 flex border-2 border-primary rounded-full"></div>
          </div> */}
                </div>
            </div>
        </div>
    );
};

export default Features9;
