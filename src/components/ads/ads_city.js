import React,{Component} from "react";
import {TouchableOpacity} from "react-native";
import { Content,Card, CardItem, Thumbnail,Text, Image, View, Item } from "native-base";


const dataAtas =[
    
    {
        id:"1",
        nama:"Jakarta",
        gambar : "https://www.nationsonline.org/gallery/Indonesia/Jakarta-Skyline-from-Bund.jpg"
    },
    {
        id:"2",
        nama:"Bandung",
        gambar : "https://s3-ap-southeast-1.amazonaws.com/magazine.job-like.com/magazine/wp-content/uploads/2018/06/19223846/Rekomendasi-Destinasi-Wisata-Keluarga-di-Kota-Bandung.jpg"
    },
    {
        id:"3",
        nama:"Yogyakarta",
        gambar : "http://lcc-abbeytravel.com/media/Crop/image/201611/58m6bv03q_rectangle-770x434-0x115-1400x904.jpg"
    },
    {
        id:"4",
        nama:"Makasar",
        gambar : "https://festivaljalanjalan.com/wp-content/uploads/2018/01/pantai-losari-makasar.jpg"
    },
    {
        id:"5",
        nama:"Medan",
        gambar : "https://media.suara.com/pictures/653x366/2019/05/06/80425-masjid-raya-medan-shutterstock.jpg"
    },
    ,
    {
        id:"6",
        nama:"Surabaya",
        gambar : "https://cdn-u1-gnfi.imgix.net/post/large-surabaya-e5b46818b09a03a19c39137e32d22c1f.jpg"
    },
    {   
        id:"7",
        nama:"Bali",
        gambar : "https://images.thrillophilia.com/image/upload/s--AL968x5_--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/084/786/original/1556012061_shutterstock_631736717.jpg.jpg?1556012061"
    },
    {
        id:"8",
        nama:"Banjarmasin",
        gambar : "https://media-cdn.tripadvisor.com/media/photo-s/0d/ae/ff/11/floating-market-in-banjarmasin.jpg"
    },
]


export default class Kota extends Component{

    render(){
        return(
            <Content horizontal>
                {dataAtas.map((data,index)=>{
                return(
                    <Card key={index} style={{ height:150, }} transparent>
                        <CardItem style={{flexDirection:"column"}}>
                        
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('List')} >
                                <Thumbnail style={{ height:110, width: 110}} source={{uri:data.gambar}}/>
                                <Text style={{textAlign:'center'}}>{data.nama}</Text>
                            </TouchableOpacity> 
                        </CardItem>
                    </Card>
                    )
                })}
               
            </Content>
        );
    }
}