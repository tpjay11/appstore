import * as React from 'react';
import * as cs from 'classnames';
import './SearchBox.css';
/* tslint:disable:no-console */

const K_ENTER = 13;

const searchMark = require('./search_normal.svg');

export interface AutocompleteItem {
    id: string;
    name: string;
}

export interface Props {
    placeholder?: string;
    trim?: boolean;
    onChange?(): void;
    onSearch(key: string): void;
}

export interface State {
    showPlaceholder: boolean;
    showClear: boolean;
    isFocus: boolean;
}

type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>;

export default class SearchBox extends React.Component<Props, State> {
    input: HTMLInputElement | null;

    constructor(props: Props) {
        super(props);
        this.state = {
            showPlaceholder: true,
            showClear: false,
            isFocus: false,
        };
        this.input = null;
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onInputChanged = this.onInputChanged.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    componentWillUnmount() {
        this.input = null;
    }

    // tslint:disable:no-any
    onKeyDown(e: any) {
        const ev = e as KeyboardEvent;

        if (ev.keyCode === K_ENTER) {
            this.props.onSearch(this.getValue());
        }
    }

    clearInput() {
        if (this.input) {
            this.input.value = '';
            this.onInputChanged();
            this.input.focus();
        }
    }

    getRawValue() {
        return this.input ? this.input.value : '';
    }

    getValue() {
        if (this.props.trim) {
            return this.getRawValue().trim();
        } else {
            return this.getRawValue();
        }
    }

    onInputChanged(): void {
        const value = this.getValue();
        this.setState({
            showClear: value !== '',
        });
    }

    onFocus(): void {
        this.setState({
            isFocus: true,
            showPlaceholder: false,
        });
    }

    onBlur(): void {
        const value = this.getValue();
        this.setState({
            isFocus: false,
            showPlaceholder: value === '',
        });
    }

    render() {
        const placeholder = this.props.placeholder || '';
        const { showPlaceholder, showClear, isFocus } = this.state;
        return (
            <div className={cs('search-box', { 'has-content': showClear }, { 'is-focus': isFocus })}>
                <input
                    type="text"
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    aria-label={placeholder}
                    ref={input => { this.input = input; }}
                    onChange={this.onInputChanged}
                    onKeyDown={this.onKeyDown}
                />
                <div className="search-box__placeholder">
                    <img src={searchMark} />
                    {showPlaceholder ? <span>{placeholder}</span> : null}
                </div>
                {showClear ?
                    <button
                        className="search-box__clear"
                        onClick={this.clearInput}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                    /> : null}
            </div>
        );
    }
}