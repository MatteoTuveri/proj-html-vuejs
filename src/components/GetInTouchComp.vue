<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-8">
                <div>
                    <TitleSpecial :item="item" />
                </div>
                <div>
                    <div class="row row-cols-2">
                        <div v-for="item in inputData" class="col mb-3">
                            <input :type="item.type" class="form-control border-0 input py-3" :id="item.id"
                                :placeholder="item.placeholder">
                        </div>
                        <div class="col mb-3">
                            <select class="form-select border-0 input py-3">
                                <option selected>—Please choose an option—</option>
                                <option value="Sales and Purchasing">Sales and Purchasing</option>
                                <option value="Financial and Accounts">Financial and Accounts</option>
                                <option value="Human Resources">Human Resources</option>
                                <option value="Another subjects">Another subjects</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control border-0 input" id="msg" rows="4"
                            placeholder="Write a message"></textarea>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="button text-uppercase my-3">
                        send
                    </div>
                </div>
            </div>
            <div class="col-4 px-5">
                <InfoList :title="InfoList.title" :paragraph="InfoList.paragraph" :item="InfoList.item" :button="'view map'"
                    :special="true" />
            </div>
        </div>

    </div>
</template>
<script>
import { store } from '../data/store';
import InfoList from './reusable/InfoList.vue';
import TitleSpecial from './reusable/TitleSpecial.vue';

export default {
    name: "GetInTouchComp",
    data() {
        return {
            store,
            item: store.sectionList.getInTouch.details,
            inputData: [
                { type: 'text', placeholder: 'Name', id: 'name' },
                { type: 'mail', placeholder: 'E-mail', id: 'mail' },
                { type: 'text', placeholder: 'Phone', id: 'phone' }
            ],
            InfoList: {
                title: 'Example Inc.',
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                item: [
                    {
                        icon: store.companyInfo.phoneContact.icon,
                        text: store.companyInfo.phoneContact.text
                    },
                    {
                        icon: store.companyInfo.mailContact.icon,
                        text: store.companyInfo.mailContact.text
                    },
                    {
                        icon: store.companyInfo.position1.icon,
                        text: store.companyInfo.position1.text
                    },
                    {
                        icon: store.companyInfo.position2.icon,
                        text: store.companyInfo.position2.text
                    },
                ]
            }
        };
    },
    props: {
        id: Number
    },
    components: { TitleSpecial, InfoList }
}
</script>
<style lang="scss" scoped>
@use '../assets/style/partials/variables' as*;

.input {
    background-color: rgb(239, 239, 239);
}
.button {
    background-color: $special-bg-font;
    border-radius: 50px;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    transition: 1s;
}
.button:hover{
    background-color: rgb(0, 166, 166);
    transition: 1s;
}
</style>