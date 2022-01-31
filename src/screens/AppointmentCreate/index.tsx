import { useState } from "react";
import {
  Text,
  View,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Background } from "../../components/Background";
import { CategorySelect } from '../../components/CategorySelect';
import { Header } from "../../components/Header";
import { SmallInput } from "../../components/SmallInput";
import { Button } from "../../components/Button";
import { theme } from "../../global/styles/theme";
import { TextArea } from "../../components/TextArea";

import { styles } from "./style";

export function AppointmentCreate({...rest}: TouchableOpacityProps) {
  const [categorySelected, setCategorySelected] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
      style={styles.container}
    >
      <ScrollView>
        <Background>
          <Header title="Agendar partida" />

          <Text style={[styles.label, {
            marginLeft: 24,
            marginTop: 36,
            marginBottom: 15
          }]}>
            Categoria
          </Text>
          <CategorySelect
            hasCheckBox={true}
            categorySelected={categorySelected}
            setCategory={setCategorySelected}
          />

          <View style={styles.form}>
            <TouchableOpacity {...rest} activeOpacity={.7}>
              <View style={styles.select}>
                <View style={styles.image} />
                
                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    Selecione um servidor
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>
                    /
                  </Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>
                    :
                  </Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>
                Descrição
              </Text>

              <Text style={styles.caracteresLimit}>
                Max. de 100 caracteres
              </Text>
            </View>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={10}
              autoCorrect={false}
            />

            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </Background>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}