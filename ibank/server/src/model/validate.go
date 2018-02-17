package model

import (
	"regexp"
	"fmt"
	"math"
	"strconv"
)

const IS_STRING_REGEX = "(?i)^[a-z\\-]+$"
const IS_STRING_WITH_NUMBERS_REGEX = "(?i)^[a-z0-9\\s\\-]+$"
const STRING_LENGTH_REGEX = "^[a-zA-Z0-9]{%s,%s}$"
const IS_CAPITAL_STRING_REGEX = "^[A-Z]*$"
const IS_STRING_ONLY_NUMBERS_REGEX = "^[0-9]*$"
const IS_PASSPORT_ID = "^\\d{7}[A-Z]{1}\\d{3}[A-Z]{2}\\d$"
const IS_PHONE_NUMBER_REGEX = "^(\\d{1,3})?\\(?\\d{2}\\)?[\\s-]?\\d{3}[\\s.-]\\d{2}[\\s.-]\\d{2}$"
const IS_VALID_DATE_REGEX = "^\\d{4}[\\-\\/\\s]?((((0[13578])|(1[02]))[\\-\\/\\s]?(([0-2][0-9])" +
	"|(3[01])))|(((0[469])|(11))[\\-\\/\\s]?(([0-2][0-9])|(30)))|(02[\\-\\/\\s]?[0-2][0-9]))$"

func usePatternForString(validatableString, pattern string) (bool) {
	matchResult, err := regexp.MatchString(pattern, validatableString)
	if err != nil {
		return false
	}
	return matchResult
}

func IsPhoneNumber(validatablePhone string) (bool) {
	return usePatternForString(validatablePhone, IS_PHONE_NUMBER_REGEX)
}

func IsPassportID(validatableString string) (bool) {
	return usePatternForString(validatableString, IS_PASSPORT_ID)
}

func IsString(validatableString string) (bool) {
	return usePatternForString(validatableString, IS_STRING_REGEX)
}

func IsStringWithNumbers(validatableString string) (bool) {
	return usePatternForString(validatableString, IS_STRING_WITH_NUMBERS_REGEX)
}

func IsCapitalString(validatableString string) (bool) {
	return usePatternForString(validatableString, IS_CAPITAL_STRING_REGEX)
}

func IsNumberString(validatableString string) (bool) {
	return usePatternForString(validatableString, IS_STRING_ONLY_NUMBERS_REGEX)
}

func IsValidDate(validatableDate string) (bool) {
	return usePatternForString(validatableDate, IS_VALID_DATE_REGEX)
}

func IsValidLengthSize(validatableString string, minLength, maxLength int) (bool) {
	regex := fmt.Sprintf(STRING_LENGTH_REGEX, strconv.Itoa(minLength), strconv.Itoa(maxLength))
	matchResult, err := regexp.MatchString(regex, validatableString)
	if err != nil {
		return false
	}
	return matchResult
}

func IsValidMaxLength(validatableString string, maxLength int) (bool) {
	return IsValidLengthSize(validatableString, 1, maxLength)
}

func IsValidMinLength(validatableString string, minLength int) (bool) {
	return IsValidLengthSize(validatableString, minLength, math.MaxInt64)
}

func IsValidFixedLength(validatableString string, fixedLength int) (bool) {
	return IsValidLengthSize(validatableString, fixedLength, fixedLength)
}

type Validatable interface {
	IsValid() bool
}
