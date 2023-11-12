<script setup>
// REQUEST
import {request} from "./requests.vue"
// USER MANAGEMENT 
</script>
<script>
export default {
    data() {
        return {
            employeeId:"",
            employeeMail:"",
            employeeName:"",
            activeTab:"manager"
        }
    },
    props:[
    "activeUser"
    ],
    created(){
        // console.clear()
    },
    methods: {
        getUser()
        {
            request(`/users/${this.employeeId}`,"GET").then((res)=>{
                if(res.ok)
                {
                    res.json().then((data)=>{
                        this.$emit("changeActiveUser",data)
                    })
                }
                else 
                {
                    if(res.status == 404)
                    {
                        // Manager user not found in UI
                    }
                }
            })
        },
        createUser()
        {
            request("/users/","POST",{email:this.employeeMail,username:this.employeeName}).then((res)=>{
                console.log(res)
            })
        },
        updateUser()
        {
            request(`/users/${this.employeeId}`,"PUT",{username:this.employeeName,email:this.employeeMail}).then((res)=>{
                console.log(res)
                res.text().then((data)=>{
                    console.log(data)
                })
            })
        },
        deleteUser()
        {
            request(`/users/${this.employeeId}`,"DELETE").then((res)=>{
                console.log(res)
            })
        },
        exitModal() 
        {
            this.$emit("closeUserModal")
        },
        checkKeyPressed(event)
        {
            if(event.keyCode == 13) //check if user presses enter
            {
            }
        },
        switchTo(targetedTab)
        {
            this.activeTab = targetedTab
        }
    }
}
</script>


<template>
    <!-- MODAL MANAGEMENT -->
    <section class="modalContainer">
        <div class="modal layoutVertical">
            <div class="modalTitleContainer">
                <h2>User Management</h2>
            </div>
            <button type="button" @click="exitModal()" class="exitButton">X </button>
            
            <div class="tab">
                <div class="tabNav">
                    <button type="button" :class="{ 'active' : activeTab=='manager'}" class="tabLink" @click="switchTo('manager')">Manager</button>
                    <div class="separationVertical"></div>
                    <button type="button" :class="{ 'active' : activeTab=='creator'}" class="tabLink" @click="switchTo('creator')">Créateur</button>
                </div>
                <Transition>
                    <div class="tabContent layoutHorizontal" id="userManagement" v-if="activeTab==='manager'">
                        <span>first</span>
                    </div>
                </Transition>
                <Transition>
                    <div class="tabContent" v-if="activeTab==='creator'" id="userCreation">
                        <span>second</span>
                    </div>
                </Transition>
            </div>
            <button type="button" >CLOSE</button>
            <!-- USER SETTINGS -->
            <!-- <section id="userSettingsContainer" class="layoutVertical">
                
                <div class="userSetting layoutHorizontal">
                    <div class="containerInput">
                        <input type="text" v-model="employeeId" @keydown="checkKeyPressed($event)"/>
                        <label name="test" :class="{ 'onTop' : employeeId !== '' }">ID de l'employé</label>
                    </div>
                    <button type="button" @click="searchUser">Rechercher</button>
                </div>
            </section> -->
        </div>
    </section>
</template>


<style>
button
{
    background-color:var(--main-color);
    border:1px solid var(--main-color);
    transition: 0.5s;
}
button:hover
{
    background-color: transparent;
}
#userSettingsContainer
{
    padding:0px 10px;
}
</style>
<style>@import url(../assets/modal.css);</style>
<style>@import url(../assets/general.css);</style>