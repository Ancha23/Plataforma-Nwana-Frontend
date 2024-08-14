import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
    return(
        <>
         <div className="sidebar">
      <h2 className="sidebar-title">Menu Principal</h2>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="/progresso" className="sidebar-link">Ver Progresso</Link>
          <ul className="sidebar-submenu">
            <li><Link to="/progresso/visao-geral" className="sidebar-sublink">Visão Geral</Link></li>
            <li><Link to="/progresso/relatorios" className="sidebar-sublink">Relatórios de Desempenho</Link></li>
            <li><Link to="/progresso/metas" className="sidebar-sublink">Metas e Objetivos</Link></li>
          </ul>
        </li>
        <li className="sidebar-item">
          <Link to="/graficos" className="sidebar-link">Gráficos</Link>
          <ul className="sidebar-submenu">
            <li><Link to="/graficos/desempenho" className="sidebar-sublink">Gráficos de Desempenho</Link></li>
            <li><Link to="/graficos/tendencias" className="sidebar-sublink">Gráficos de Tendências</Link></li>
            <li><Link to="/graficos/comparacoes" className="sidebar-sublink">Comparações e Análises</Link></li>
          </ul>
        </li>
        <li className="sidebar-item">
          <Link to="/usuarios" className="sidebar-link">Usuários</Link>
          <ul className="sidebar-submenu">
            <li><Link to="/usuarios/gerenciar" className="sidebar-sublink">Gerenciar Usuários</Link></li>
            <li><Link to="/usuarios/perfis" className="sidebar-sublink">Perfis e Permissões</Link></li>
            <li><Link to="/usuarios/atividade" className="sidebar-sublink">Atividade e Logs</Link></li>
          </ul>
        </li>
      </ul>
    </div>
        </>
    )
}