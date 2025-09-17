import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { rateGamesStyles } from '@/styles/componentsStyle/RateGamesStyle';
import Slider from '@react-native-community/slider';
import * as Haptics from 'expo-haptics';

type RateGameModalProps = {
	visible: boolean;
	onClose: () => void;
	onRate: (value: number) => void;
};

export default function RateGameModal({ visible, onClose, onRate }: RateGameModalProps) {
	const [sliderValue, setSliderValue] = useState(5);
	const [inputValue, setInputValue] = useState('5');

	const handleSliderChange = (value: number) => {
		setSliderValue(value);
		setInputValue(String(Math.round(value)));
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
	};

	const handleInputChange = (text: string) => {
		let num = Math.max(0, Math.min(10, Number(text)));
		setSliderValue(num);
		setInputValue(String(num));
	};

	const handleRate = () => {
		onRate(sliderValue);
		onClose();
	};

		return (
		<Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<View style={rateGamesStyles.backdrop}>
					<View style={rateGamesStyles.popup}>
						<Text style={rateGamesStyles.title}>Rate this game!</Text>
							<Slider
								style={{ width: 200, height: 40 }}
								minimumValue={0}
								maximumValue={10}
								step={1}
								value={sliderValue}
								onValueChange={handleSliderChange}
								minimumTrackTintColor="#4a7bdc"
								maximumTrackTintColor="#232a3d"
								thumbTintColor="#FFD600"
							/>
						<TextInput
							style={rateGamesStyles.input}
								keyboardType="numeric"
								value={inputValue}
								onChangeText={handleInputChange}
								maxLength={2}
							/>
							<TouchableOpacity style={rateGamesStyles.rateButton} onPress={handleRate}>
								<Text style={rateGamesStyles.rateButtonText}>Rate</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={onClose}>
								<Text style={rateGamesStyles.close}>Close</Text>
							</TouchableOpacity>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</Modal>
		);
}

