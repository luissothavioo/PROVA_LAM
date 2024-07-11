import { ImageBackground, Text, View, Image, TouchableOpacity } from "react-native";
import { styleContainer, styleText, styleElementos } from "../../styles/globalstyle"
import { styles } from "./styles"
import { IPagina } from "../../../App";
import { ButtonSlide, ButtonSlide2 } from "../../components/ButtonSlide"
import { MenuDrawer, MenuDrawerTypes } from "../../navigation/MenuDrawer.navigation";

export function Slide2({ navigation }: MenuDrawerTypes) {
    const slide = require('../../assets/VasoPlanta2.png')
    const rosa = require('../../assets/rosa.png')
    const suculenta = require('../../assets/suculenta.png')
    const girassol = require('../../assets/girassol.png')

    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styleContainer.container}>
                <Text style={styleText.textTitle}>Plant</Text>

                <View style={styles.quadroBranco}>
                    <View style={styles.head}>
                        <Text style={styleText.titleBoard}>Minhas plantas</Text>
                        <View style={styles.paddingTodasButton}>
                            <View style={styles.todasButton}>
                                <Text style={styles.todasText}>TODAS</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.body}>
                        <View style={styles.paddingQuadroPreto}>
                            <View style={styles.quadroPreto}>
                                <View style={styles.image}>
                                    <Image source={rosa} />
                                </View>
                                <Text style={styles.textTitleQuadroPreto}>Rosa</Text>
                                <Text style={styles.textQuadroPreto}>uma das flores mais populares do mundo</Text>
                            </View>
                        </View>
                        <View style={styles.paddingQuadroPreto}>
                            <View style={styles.quadroPreto}>
                                <View style={styles.image}>
                                    <Image source={suculenta} />
                                </View>
                                <Text style={styles.textTitleQuadroPreto}>Suculenta</Text>
                                <Text style={styles.textQuadroPreto}>armazena água em quantidades maiores</Text>
                            </View>
                        </View>
                        <View style={styles.paddingQuadroPreto}>
                            <View style={styles.quadroPreto}>
                                <View style={styles.image}>
                                    <Image source={girassol} />
                                </View>
                                <Text style={styles.textTitleQuadroPreto}>Girassol</Text>
                                <Text style={styles.textQuadroPreto}>nome derivado do formato de sua flor</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styleText.subtitleArea}>
                    <Text style={styles.subtitleText}>gerencie suas plantas de forma simples</Text>
                </View>
            </View>

            <View style={styleContainer.containerButton}>
                <TouchableOpacity style={styleElementos.butt}
                    onPress={() => navigation.push("Slide1")}
                >
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}