from django.shortcuts import render
from .models import Cliente
from .models import Entregador
from django.http import HttpResponse

def index(request):
    return HttpResponse(
        "Hello, world. You're at the polls index."
    )

def home(request):
    info_cliente = Cliente.objects.all()
    
    dados_cliente = {
        'clientes': info_cliente
    }

    return render(
        request,
        'home.html',
        dados_cliente
    )

class DadosCliente:
    def home(request):
        info_cliente = Cliente.objects.all()
    
        dados_cliente = {
            'clientes': info_cliente
        }

        return render(
            request,
            'cliente.html',
            dados_cliente
        )
    
class DadosEntregador:
    def home(request):
        info_entregador = Entregador.objects.all()
    
        dados_entregador = {
            'entregadores': info_entregador
        }

        return render(
            request,
            'entregador.html',
            dados_entregador
        )