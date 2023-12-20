import 'package:graphql_flutter/graphql_flutter.dart';
import 'graphql_client.dart';

void main() {
  final client = clientFor(uri: 'https://your-graphql-endpoint.com');
  runApp(MyApp(client: client!));
}

class MyApp extends StatelessWidget {
  final ValueNotifier<GraphQLClient> client;

  MyApp({required this.client});

  @override
  Widget build(BuildContext context) {
    return GraphQLProvider(
      client: client,
      child: CacheProvider(
        child: MaterialApp(
          title: 'GraphQL Flutter',
          home: HomePage(),
        ),
      ),
    );
  }
}
