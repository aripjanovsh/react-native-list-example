import React, {ReactNode} from 'react';
import {Text} from 'react-native';
import {AppStore} from '../core/configureStore';

interface Props {
  store: AppStore;
  children: ReactNode;
}

interface State {
  didCatchError: boolean;
}

export class AppErrorBoundary extends React.Component<Props, State> {
  public state: State = {didCatchError: false};

  private captureException(): void {
    this.setState({didCatchError: true});
  }

  public componentDidCatch() {
    this.captureException();
    //log
  }

  public render() {
    const {didCatchError} = this.state;
    const {children} = this.props;

    return !didCatchError ? children : <Text>Произошла внутреняя ошибка.</Text>;
  }
}
